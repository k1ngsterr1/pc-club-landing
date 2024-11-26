'use client'

import { useState } from "react";
import { Accordion } from "@/features/Accordion/PC";


const accordionContent = [
    {
        id: 1,
        title: "Lorem Ipsum ",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        title: "Lorem Ipsum ",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 4,
        title: "Lorem Ipsum ",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 5,
        title: "Lorem Ipsum ",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 6,
        title: "Lorem Ipsum ",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 7,
        title: "Lorem Ipsum ",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];

export const SuccessTab = () => {
    const [openAccordionId, setOpenAccordionId] = useState<null | number>(null);

    const handleToggle = (id: number) => {
        console.log("Current ID:", id, "Previous ID:", openAccordionId);
        setOpenAccordionId((prev) => (prev === id ? null : id));
    };


    return (
        <div className="mt-8 flex flex-col">
            {accordionContent.map((item, index) => (
                <Accordion
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    isOpen={openAccordionId === item.id}
                    onToggle={handleToggle}
                    isLast={index === accordionContent.length - 1}
                />
            ))}
        </div>
    );
};
