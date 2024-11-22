import React, { forwardRef } from "react";
import styles from "./styles.module.scss";

interface IParagraph {
    className?: string;
    children: string;
    lineHeight?: string;
    width?: string;
    marginTop?: string;
    paragraphType?: "regular" | "small" | "extended";
}

export const Paragraph = forwardRef<HTMLParagraphElement, IParagraph>(
    ({ children, className, lineHeight, width, marginTop, ...rest }, ref) => {
        return (
            <p
                ref={ref as React.Ref<HTMLParagraphElement>}
                style={{ lineHeight, width, marginTop }}
                className={`${styles.paragraph} ${className}`}
                {...rest}
            >
                {children}
            </p>
        );
    }
);

Paragraph.displayName = "Paragraph";