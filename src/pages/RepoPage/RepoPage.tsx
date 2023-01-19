import React, {useEffect, useState} from 'react';
import {Button, Loader} from "@components/ui";
import {useNavigate, useParams} from "react-router-dom";
import {getContributors, getCurrentRepo} from "@store/actions/RepoActions";
import {useAppDispatch, useAppSelector} from "@hooks/index";


const RepoPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {username: userName, reponame: repoName} = useParams()
    const [repo, setRepo] = useState<any>({owner: {login:''}})
    const [contributors, setContributors] = useState<any>([])
    const {isFetching} = useAppSelector(state => state.repos)

    useEffect(() => {
        if (userName && repoName) {
            dispatch(getCurrentRepo({userName, repoName, setRepo}))
            dispatch(getContributors({userName, repoName, setContributors}))
        }
    }, [])

    if (isFetching)
        return <Loader/>

    console.log(contributors)
    return (
        <div>
            <Button onClick={() => navigate('/')}>
                Back
            </Button>
            <div>
                <img src={repo.owner.avatar_url} alt={''}/>
                {contributors.map((contributor:any) =>
                    <div>
                        {contributor.login}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RepoPage;