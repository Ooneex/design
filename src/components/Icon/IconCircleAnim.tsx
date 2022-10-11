import React from "react";
import { Icon } from "./Icon";
import { IconType } from "./types";

export const IconCircleAnim = (
	{ variant = "primary", size = "normal", spin = true }: IconType,
) => {
	return (
		<Icon>
			<i
				className={"_ooneex-font-icon _icon-circle-alt " + variant + " " +
					size + (spin ? " _ooneex-font-icon-is-spinning" : "")}
			/>
		</Icon>
	);
};
