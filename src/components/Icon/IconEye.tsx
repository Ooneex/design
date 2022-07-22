import React from 'react';
import {Icon} from "./Icon";
import {IconType} from "./types";

export const IconEye = ({variant = "primary", size = "normal", spin}: IconType) => {
    return (
        <Icon>
            <i className={"_ooneex-font-icon _icon-eye " + variant + " " + size + (spin ? " _ooneex-font-icon-is-spinning" : "")} />
        </Icon>
    );
};
