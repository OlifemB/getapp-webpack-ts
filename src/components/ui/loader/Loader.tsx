import React from 'react';
import style from './Loader.module.less'

export const Loader = () => {
    return (
        <div className={style.root}>
            <div className={style.item}></div>
        </div>
    );
};