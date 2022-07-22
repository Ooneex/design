import React, {ReactElement} from 'react';
import {LinkType} from "./types";
import "./Link.scss";

export const Link = ({to, ext = false, className, children}: LinkType): ReactElement => {
    return (
        <a href={to} className={"_ooneex-link _f-f-italic" + (className ? " " + className : "")}>{children}</a>
    );
};
