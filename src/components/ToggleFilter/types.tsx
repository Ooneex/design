export type ToggleFilterElementType = {
	name?: string;
	label: string;
	isActive: boolean;
};

export type ToggleFilterType = {
	filters: ToggleFilterElementType[];
};
