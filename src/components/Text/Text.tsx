import React, { ReactElement } from "react";
import { TextType } from "./types";
import "./Text.scss";

export const Text = (
	{ variant, className, children, size = "normal", element = "p" }: TextType,
): ReactElement => {
	return (
		<>
			{(element === "p")
				? (
					<p
						className={"_ooneex-text " + size + (variant ? " " + variant : "") +
							(className ? " " + className : "")}
					>
						{children}
					</p>
				)
				: (
					<span
						className={"_ooneex-text " + size + (variant ? " " + variant : "") +
							(className ? " " + className : "")}
					>
						{children}
					</span>
				)}
		</>
	);
};
