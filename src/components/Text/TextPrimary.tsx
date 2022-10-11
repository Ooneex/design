import React, { ReactElement } from "react";
import { Text } from "./Text";
import { TextSizeType } from "./types";

export const TextPrimary = (
	{ size, children, className }: TextSizeType,
): ReactElement => (
	<Text variant={"primary"} size={size} className={className}>{children}</Text>
);
