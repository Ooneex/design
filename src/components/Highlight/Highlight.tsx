import React from "react";
import {IconWarning} from "../Icon/IconWarning";
import {IconIdea} from "../Icon/IconIdea";
import {IconVideoPlayer} from "../Icon/IconVideoPlayer";
import {HighlightType} from "./types";
import "./Highlight.scss";


export const Highlight = ({children, type = "idea"}: HighlightType) => {
    let icon = <IconIdea variant={"white"} size={"md"} />;

    if (type === "youtube") {
        icon = <IconVideoPlayer variant={"white"} size={"md"} />;
    }

    if (type === "warning") {
        icon = <IconWarning variant={"white"} size={"md"} />;
    }

    return(
        <div className={"_ooneex-highlight " + type}>
            <span className={"square"}>
                {icon}
            </span>

            <span className={"text"}>
                {children}
            </span>
        </div>
    )
}
