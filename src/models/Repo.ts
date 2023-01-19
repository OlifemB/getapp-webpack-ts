import {IUser} from "./User";


export interface RepoProps {
    owner: IUser,
    name: string,
    stargazers_count: number,
    updated_at: string,
    html_url: string,
}

export interface GetReposProps {
    searchQuery: string,
    currentPage: number,
    perPage: number,
}

export interface GetCurrentRepoProps {
    userName: string,
    repoName: string,
    setRepo: (data: object) => void,
}

export interface GetContributorsProps {
    userName: string,
    repoName: string,
    setContributors: (data: object) => void,
}