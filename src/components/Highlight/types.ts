import React from "react";

export type HighlightType = {
	type?: "youtube" | "idea" | "warning";
	children: React.ReactNode;
};
