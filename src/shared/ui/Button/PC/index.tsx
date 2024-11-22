"use client";

import React, { CSSProperties, ReactNode } from "react";

interface IButtonTypes {
    buttontype?: string | "outline" | "filled";
}

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonTypes {
    text: string;
    children?: ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    children,
    buttontype = "outline",
    className,
    ...props
}) => {
    const getButtonConfig = (
        type: IButtonTypes["buttontype"]
    ): { classes: string; style?: CSSProperties } => {
        switch (type) {
            case "filled":
                return {
                    classes:
                        "text-yellow px-2 font-[300] text-[20px]",
                };
            default:
                return {
                    classes:
                        "text-yellow py-3 px-10 font-[300] border text-[20px]",
                };
        }
    };

    const { classes, style } = getButtonConfig(buttontype);

    return (
        <button
            className={`${classes} ${className} flex items-center justify-center`}
            style={style}
            {...props}
        >
            {text}
            {children}
        </button>
    );
};