import React, { ReactElement } from "react";
import "./Heading.scss";

type PropsType = {
	children: React.ReactNode;
};

export const Heading = ({ children }: PropsType): ReactElement => {
	return (
		<>
			{children}
		</>
	);
};
