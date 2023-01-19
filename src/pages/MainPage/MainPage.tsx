import React, {useEffect, useState} from 'react';
import Repo from "@components/Repo";
import {Button, Pagination, Search} from "@components/ui"
import {createPages} from "@utils/pagesCreator";
import {getRepos} from "@store/actions/RepoActions";
import {RepoState, setCurrentPage} from "@store/slices/RepoSlice";
import {useAppDispatch, useAppSelector} from "@hooks/index";
import Layout from "@components/Layout/Layout";


const MainPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const {currentPage, totalCount, perPage, items, isFetching} = useAppSelector<RepoState>(state => state.repos)
    const [page, setPage] = useState()
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        dispatch(getRepos({searchQuery, currentPage, perPage}))
    }, [currentPage])

    const handleSearchClick = () => {
        dispatch(getRepos({searchQuery, currentPage, perPage}))
    }

    const pagesCount = Math.ceil(totalCount / perPage)
    const pages: any[] = []
    createPages({pages, currentPage, pagesCount})

    return (
        <Layout>
            <div style={{margin: '10px 0px', display: 'flex', gap: 8}}>
                <Search setValue={setSearchQuery} value={searchQuery}/>
                <Button onClick={handleSearchClick}>
                    Search
                </Button>
            </div>

            <Pagination pages={pages} currentPage={currentPage}
                        setCurrentPage={(page) => dispatch(setCurrentPage(page))}/>

            <Repo.List items={items} isFetching={isFetching}/>
        </Layout>
    );
};

export default MainPage;