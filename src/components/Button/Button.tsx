import React, {ReactElement, useCallback, useRef} from "react";
import { ButtonType } from "./types";
import "./Button.scss";

// Todo: Outline

export const Button = ({
	name = "ooneexButton",
	variant = "primary",
	disabled = false,
	loading = false,
	onClick,
	className,
	children
}: ButtonType): ReactElement => {

	const button = useRef(null);

	const onClickCallback = useCallback((e: React.MouseEvent) => {
		if (disabled) {
			return;
		}

		// @ts-ignore
		let x = e.clientX - button.current.offsetLeft;
		// @ts-ignore
		let y = e.clientY - button.current.offsetTop;

		let ripple = document.createElement("span");
		ripple.style.left = x + "px";
		ripple.style.top = y + "px";
		ripple.className = "_ripple";
		// @ts-ignore
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
			className={"_ooneex _button _" + variant + (loading ? " _loading" : "") + (className ? " " + className : "")}
			disabled={loading || disabled}
			onClick={onClickCallback}
		>
			{loading ? (
				<>
					<span className={"_rotate"} />
					<span className={"_rotate"} />
					<span className={"_rotate"} />
					<span className={"_rotate"} />
				</>
			) : null}
			{children}
		</button>
	);
};
