import React, {ReactElement} from 'react';
import {HeadingType} from "./types";

export const H2 = ({variant = "primary", size = "normal", icon, className, children}: HeadingType): ReactElement => {
    return (
        <h2 className={"_ooneex-heading " + variant + " " + size + (icon ? " icon" : "") + (className ? " " + className : "")}>
            <span className={"_ooneex-heading-wrapper"}>
                {icon ? icon : null}
                <span className={"_f-f-extra-bold"}>{children}</span>
            </span>
        </h2>
    );
};
