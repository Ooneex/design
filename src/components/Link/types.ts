import React from "react";

export type LinkType = {
	to: string;
	target?: "blank" | "parent" | "self" | "top";
	className?: string;
	children: React.ReactNode;
};
