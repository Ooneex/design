import React, { ReactElement } from "react";
import { Text } from "./Text";
import { TextSizeType } from "./types";

export const TextSecondary = (
	{ size, children, className }: TextSizeType,
): ReactElement => (
	<Text variant={"secondary"} size={size} className={className}>
		{children}
	</Text>
);
