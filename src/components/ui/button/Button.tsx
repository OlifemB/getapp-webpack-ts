import React from 'react';
import style from "./button.module.less"

interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string | string[]
    onClick?: () => any
    props?: any
}

export const Button: React.FC<ButtonProps> = ({children, onClick, ...props}) => {
    return (
        <button
            {...props}
            className={style.root}
            onClick={onClick}
        >
            {children}
        </button>
    );
};