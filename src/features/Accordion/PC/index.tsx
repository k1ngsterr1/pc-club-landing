"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ArrowRight from "@/assets/PC/arrow-right";

interface IAccordionProps {
    id: number;
    title: string;
    description: string;
    isOpen: boolean;
    onToggle: (id: number) => void;
    isLast: boolean;
}

export const SuccessAccordion = ({
    id,
    title,
    description,
    isOpen,
    onToggle,
    isLast,
}: IAccordionProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div
            className="w-[800px] flex flex-col cursor-pointer"
            onClick={() => onToggle(id)}
        >
            <div className="flex flex-row items-center justify-between w-full py-4">
                <span className="text-[#FFFFFFCC] font-[400] text-[20px]">{title}</span>
                <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                    }`}>
                    <ArrowRight />
                </div>

            </div>
            <div
                ref={contentRef}
                style={{ maxHeight: `${height}px` }}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
                <p className="mt-2 mb-2 font-[300] text-lg text-white">{description}</p>
            </div>
            <hr className="w-full h-[1px] bg-[#FFFFFF1A]" />
            {isLast && <hr className="w-full h-[1px] bg-[#FFFFFF1A]" />}
        </div>
    );
};