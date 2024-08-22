import React from "react";
import { buttonColors } from "../../styles/colors/Colors";

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface ButtonProps {
    variant?: Variant;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
    // Map variant to Tailwind CSS classes
    const variantClasses: Record<Variant, string> = buttonColors;

    return (
        <button className={`py-2 px-4 rounded ${variantClasses[variant]}`}> {children} </button>
    );
};

export default Button;