import {TerminalType} from "./types";
import "./Terminal.css";
import * as React from 'react';
import {IconWindowCode} from "../Icon/IconWindowCode";
import {Spacer} from "../Spacer/Spacer";
import {IconArrowAltRight} from "../Icon/IconArrowAltRight";
import {IconCopy2} from "../Icon/IconCopy2";

export const Terminal= ({code}: TerminalType) => {

    return (
        <div className={"_ooneex-terminal"}>
            <div className={"header"}>
                <span className={"dot-container"}>
                    <span className={"dot-red"} />
                    <span className={"dot-yellow"}/>
                    <span className={"dot-green"}/>
                </span>
                <div className={"title-header"}>
                    <span className={"icon-terminal"}><IconWindowCode  variant={"windowcode"} size={"md"}/></span>
                  <span className={"title-text"}>~/my/projects</span>
                </div>
            </div>
            <div className={"inside-container"}>
            <span className={"title-text-second"}>~/my/projects</span>
            <span className={"window-code"}>
                <span className={"arrow-group"}>
                <IconArrowAltRight size={"xs"} variant={"arrow"}/>
                <span className={"arrow-toleft"}><IconArrowAltRight size={"xs"} variant={"arrow"}/></span>
                <span className={"arrow-toleft"}><IconArrowAltRight size={"xs"} variant={"arrow"}/></span>
            </span>
                <span className={"ooneex-code"}><span className={"deno-word"}>deno</span><code>task project:build</code></span>
            </span>
            </div>
            <span className={"icon-copy"}><IconCopy2  size={"md"} variant={"disabled"}></IconCopy2></span>
        </div>

    )
}