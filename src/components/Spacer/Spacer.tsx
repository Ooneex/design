import React, {ReactElement} from 'react';
import {SpacerType} from "./types";
import "./Spacer.scss";

export const Spacer = ({size = "md", inline = false}: SpacerType): ReactElement => {
    return (
        <span className={"_ooneex-spacer " + size + (inline ? " inline" : " block" )} />
    );
};
