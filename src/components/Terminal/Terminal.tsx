import {TerminalType} from "./types";
import "./Terminal.css";
import * as React from 'react';

export const Terminal= ({code}: TerminalType) => {

    return (
        <div className={"_ooneex-terminal"}>

            <div className={"header"}>
                <span className={"dot-container"}>
                    <span className={"dot-red"} />
                    <span className={"dot-yellow"}/>
                    <span className={"dot-green"}/>
                </span>
                <span className={"title-header"}>
                    ~/my/projects
                </span>
            </div>
        </div>

    )
}