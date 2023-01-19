import React from 'react';
import {Button} from "@components/ui"
import {useNavigate} from "react-router-dom";

const Error: React.FC = (props) => {
    const navigate = useNavigate()

    return (
        <div>
            Error<br/>
            <Button onClick={() => navigate('/')}>
                Back
            </Button>
        </div>
    );
};

export default Error;