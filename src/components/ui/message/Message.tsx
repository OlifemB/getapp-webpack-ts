import React from "react";
import style from "./Message.module.less";

interface MessageProps {
    type: string,
    children: JSX.Element | JSX.Element[] | string | string[]
}

export const Message: React.FC<MessageProps> = ({type, children}) => {
    return <div className={style.message + ' ' + type}>{children}</div>;
};

