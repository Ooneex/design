import React from "react";
import { Icon } from "./Icon";
import { IconType } from "./types";

export const IconSearch = (
	{ variant = "primary", size = "normal", spin }: IconType,
) => {
	return (
		<Icon>
			<i
				className={"_ooneex-font-icon _icon-search " + variant + " " + size +
					(spin ? " _ooneex-font-icon-is-spinning" : "")}
			/>
		</Icon>
	);
};
