import React, {ReactElement, useCallback} from 'react';
import {ButtonType} from "./types";
import "./Button.css";
import {Spacer} from "../Spacer/Spacer";
import {IconCircleAnim} from "../Icon/IconCircleAnim";

export const Button = ({
   name = "button",
   variant = "primary",
   iconLeft,
   iconRight,
   className,
   onClick,
   children,
   disabled = false,
   isLoading = false,
   outline = false,
}: ButtonType): ReactElement => {
    const key: string = "input-" + crypto.randomUUID();

    const handler = useCallback(() => {
        if (onClick) {
            onClick({name, key});
        }
    }, [name, key, onClick]);

    if (isLoading) {
        iconLeft = <IconCircleAnim />;
        disabled = true;
    }

    let beforeText = null;
    if (iconLeft) {
        beforeText = <>{iconLeft}<Spacer inline={true} size={"xs"} /></>
    }

    let afterText = null;
    if (iconRight) {
        afterText = <><Spacer inline={true} size={"xs"} />{iconRight}</>
    }

    return (
        <button
            name={name}
            onClick={handler}
            disabled={disabled}
            className={"_ooneex-button " + variant + (iconLeft ? " icon-left":"") + (iconRight ? " icon-right":"") + (className ? " " + className:"") + (outline ? " outline":"")}
        >
            <span className={"wrapper"}>
                {beforeText}
                <span className={"_f-f text"}>{children}</span>
                {afterText}
            </span>
        </button>
    );
};
