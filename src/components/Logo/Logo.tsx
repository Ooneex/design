import React, {ReactElement} from 'react';
import {LogoType} from "./types";
import logo from "./logo.svg";
import logoFit from "./logo-fit.svg";
import "./Logo.css";

export const Logo = ({variant = "primary", type = "square", size = "normal", fit = false}: LogoType): ReactElement => {
    return (
        <img
            src={fit ? logoFit : logo}
            alt={"logo-" + variant}
            className={"_ooneex-logo " + variant + " " + type + " " + size + (fit ? " fit" : "")}
        />
    );
};
