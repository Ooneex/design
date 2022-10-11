import React, { ReactElement } from "react";
import { ToggleFilterType } from "./types";
import { Button } from "../Button/Button";
import "./ToggleFilter.scss";

export const ToggleFilter = ({ filters }: ToggleFilterType): ReactElement => {
	return (
		<div className={"_ooneex-toggle-filter"}>
			{filters.map((filter, key) => {
				return (
					// <Button className={" item" + (filter.isActive ? " active" : "")} key={key} outline={!filter.isActive}>
					//     {filter.label}
					// </Button>
					<p>re</p>
				);
			})}
		</div>
	);
};
