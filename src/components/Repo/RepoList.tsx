import React from 'react';
import {RepoItem} from "./RepoItem";
import style from './Repo.module.less'
import {Loader} from "@components/ui";

interface RepoProps {
    items: any[],
    isFetching: boolean
}

export const RepoList: React.FC<RepoProps> = ({items, isFetching}) => {
    if (isFetching)
        return <Loader/>

    return (
        <div className={style.list}>
            {items.map(item =>
                <RepoItem repo={item} key={item.id}/>
            )}

        </div>
    )
};