import React, { ReactElement, useCallback, useRef } from "react";
import { ButtonType } from "./types";
import "./Button.scss";

export const Button = ({
	name = "ooneexButton",
	variant = "primary",
	outline = false,
	disabled = false,
	loading = false,
	onClick,
	className,
	children,
}: ButtonType): ReactElement => {
	const button = useRef(null);

	const onClickCallback = useCallback((e: React.MouseEvent) => {
		if (disabled) {
			return;
		}

		// @ts-ignore: trust me
		const x = e.clientX - button.current.offsetLeft;
		// @ts-ignore: trust me
		const y = e.clientY - button.current.offsetTop;

		const ripple = document.createElement("span");
		ripple.style.left = x + "px";
		ripple.style.top = y + "px";
		ripple.className = "_ripple";
		// @ts-ignore: trust me
		button.current.appendChild(ripple);

		if (onClick) {
			onClick(e);
		}

		setTimeout(() => {
			ripple.remove();
		}, 1000);
	}, [disabled, onClick]);

	return (
		<button
			ref={button}
			name={name}
			className={"_ooneex _button _" +
				variant + (loading ? " _loading" : "") +
				(loading ? " _loading" : "") +
				(className ? " " + className : "")}
			disabled={loading || disabled}
			onClick={onClickCallback}
		>
			{loading
				? (
					<>
						<span className={"_rotate"} />
						<span className={"_rotate"} />
						<span className={"_rotate"} />
						<span className={"_rotate"} />
					</>
				)
				: null}
			{children}
		</button>
	);
};
