import React, { ReactElement } from "react";
import { LinkType } from "./types";
import "./Link.scss";

export const Link = (
	{ to, className, children, target = "blank" }: LinkType,
): ReactElement => {
	return (
		<a
			target={"_" + target}
			href={to}
			className={"_ooneex-link " + (className ? " " + className : "")}
		>
			{children}
		</a>
	);
};
