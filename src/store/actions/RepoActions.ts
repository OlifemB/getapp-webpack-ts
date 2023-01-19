import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GetContributorsProps, GetCurrentRepoProps, GetReposProps, RepoProps} from "@models/Repo";

export const getRepos = createAsyncThunk<RepoProps, GetReposProps>(
    'repos/getRepos',
    async ({searchQuery = 'stars:%3E1', currentPage, perPage}) => {
        if (searchQuery === '')
            searchQuery = 'stars:%3E1'
        const {data} = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
        return (data)
    }
)

export const getCurrentRepo = createAsyncThunk<RepoProps, GetCurrentRepoProps>(
    'repos/getRepo',
    async ({userName, repoName, setRepo}) => {
        const {data} = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
        setRepo(data)
        return (data)
    }
)

export const getContributors = createAsyncThunk<RepoProps, GetContributorsProps>(
    'repos/getContributors',
    async ({userName, repoName, setContributors}) => {
        const {data} = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`)
        setContributors(data)
        return (data)
    }
)