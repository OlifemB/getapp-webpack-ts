import React, {useEffect, useState} from 'react';
import './App.less'
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import RepoPage from "../../pages/RepoPage/RepoPage";
import Error from "../../pages/Error/Error";

const App: React.FC = () => {
    return (
        <div className={'container'}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/repo/:username/:reponame" element={<RepoPage/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="*" element={<Navigate to="/error" replace/>}/>
            </Routes>
        </div>
    );
};

export default App;