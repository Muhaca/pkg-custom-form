import "../../styles/tailwind.css"
import React from "react";
import { buttonColors } from "../../styles/colors/Colors";

type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: Color;
    children: React.ReactNode;
    className: string
    onClik: () => void
}

const Button: React.FC<ButtonProps> = ({ color = 'primary', children, className, ...props }) => {
    // Map variant to Tailwind CSS classes
    const colorClasses: Record<Color, string> = buttonColors;

    return (
        <button
            className={`py-2 px-4 rounded ${color ? colorClasses[color] : colorClasses.primary, className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;