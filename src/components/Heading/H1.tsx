import React, {ReactElement} from 'react';
import {HeadingType} from "./types";

export const H1 = ({variant = "primary", size = "normal", icon, className, children}: HeadingType): ReactElement => {
    return (
        <h1 className={"_ooneex-heading " + variant + " " + size + (icon ? " icon" : "") + (className ? " " + className : "")}>
            <span className={"wrapper"}>
                {icon ? icon : null}
                <span className={"_f-f-extra-bold"}>{children}</span>
            </span>
        </h1>
    );
};
