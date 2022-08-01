import {TerminalType} from "./types";
import "./Terminal.css";
import * as React from 'react';
import {IconWindowCode} from "../Icon/IconWindowCode";
import {Spacer} from "../Spacer/Spacer";

export const Terminal= ({code}: TerminalType) => {

    return (
        <div className={"_ooneex-terminal"}>
            <IconWindowCode size={"md"} />

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
            <Spacer size={"xs"}/>
            ~/my/projects
            <div className={"window-code"}>
                <IconWindowCode size={"md"} variant={"white"}/>
              <code>my code here</code>
            </div>
        </div>

    )
}