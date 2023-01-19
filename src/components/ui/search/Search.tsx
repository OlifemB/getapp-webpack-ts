import React from 'react';
import style from './Search.module.less'

interface SearchProps {
    placeholder?: string
    value: string,
    setValue: (e: string) => void
}

export const Search: React.FC<SearchProps> = ({placeholder = 'Input query...', value, setValue}) => {

    return (
        <input
            type={'search'}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className={style.search}
            placeholder={placeholder}
        />
    );
};