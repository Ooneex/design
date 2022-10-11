import React, { ReactElement } from "react";
import { ImageType } from "./types";
import "./Image.scss";

export const Image = (
	{ src, alt, size = "normal", round = false, className }: ImageType,
): ReactElement => {
	return (
		<img
			src={src}
			alt={alt ?? "logo-" + size}
			className={"_ooneex-image " + size + (round ? " round" : "") +
				(className ? " " + className : "")}
		/>
	);
};
