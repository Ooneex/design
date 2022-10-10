import * as React from 'react';
import {IconTerminal} from "../Icon/IconTerminal";
import {IconArrowAltRight} from "../Icon/IconArrowAltRight";
import {IconCopy} from "../Icon/IconCopy";
import {TerminalType} from "./types";
import "./Terminal.scss";

export const Terminal= ({title, code}: TerminalType) => {

    let bin: string | null = null;

    const match = code.match(/^[a-z]+/i);

    if (match) {
        bin = match[0];
        code = code.replace(bin, "").trim();
    }

    return (
        <div className={"_ooneex-terminal"}>
            <div className={"header"}>
                <div className={"box"}>
                    <span className={"dot-container"}>
                    <span className={"dot-red"} />
                    <span className={"dot-yellow"}/>
                    <span className={"dot-green"}/>
                </span>
                </div>
                <div className={"box"}>
                    <span className={"title"}>
                    <IconTerminal size={"xxs"}/>
                    <span className={"label"}>{title}</span>
                    </span>
                </div>
            </div>
            <div className={"content"}>
                <span className={"label"}>{title}</span>
                {bin ? (
                    <span className={"command"}>
                    <IconArrowAltRight size={"xxs"}/>
                    <IconArrowAltRight size={"xxs"}/>
                    <IconArrowAltRight size={"xxs"}/>
                    <span>
                        <span className={"bin"}>{bin}</span>
                        <span>{code}</span>
                    </span>
                </span>
                ) : null}
            </div>
            <div className={"copy"}>
                <IconCopy size={"xs"} variant={"disabled"} />
            </div>
        </div>

    )
}