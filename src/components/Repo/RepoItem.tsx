import React from 'react';
import style from './Repo.module.less'
import {NavLink} from "react-router-dom";

interface Props {
    repo: any
}

export const RepoItem: React.FC<Props> = ({repo}) => {
    return (
        <div className={style.item}>
            <div className={style.header}>
                <div className={'flex flex-column items-center content-center'}>
                    <img style={{width: 64, borderRadius: 100}} src={repo.owner.avatar_url} alt={''}/>
                    {repo.owner.login}
                </div>
            </div>

            <div className={'flex flex-column items-end content-center'}>
                <div>
                    <NavLink to={`/repo/${repo.owner.login}/${repo.name}`}>
                        {repo.name}
                    </NavLink>
                </div>

                <div>stars: {repo.stargazers_count}</div>

                <div>{repo.updated_at}</div>

                <a href={repo.html_url}>
                    <div>Link to Repo</div>
                </a>
            </div>
        </div>
    )
}