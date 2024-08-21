import React from "react";

export interface ButtonProps {
    label: string;
    className: string;
    children: JSX.Element;
    onClick: () => void
}

const Button = (props: ButtonProps) => {
    return <button {...props}>{props.label}</button>;
};

export default Button;