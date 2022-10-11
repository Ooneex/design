import React from "react";

export type ButtonType = {
	name?: string;
	variant?:
		| "primary"
		| "secondary"
		| "text"
		| "grey"
		| "white"
		| "success"
		| "warning"
		| "info"
		| "error";
	outline?: boolean;
	disabled?: boolean;
	loading?: boolean;
	onClick?: (e: React.MouseEvent) => void;
	className?: string;
	// Icon height 24px (svg)
	icon?: string;
	children: React.ReactNode;
};
