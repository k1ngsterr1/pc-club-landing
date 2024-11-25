import Image from "next/image";
import ElevatingCard from "@/entities/Cards/PC/ElevatingCard";
import { Paragraph } from "@/shared/ui/Paragraph/PC";
import { ElevatingTab } from "@/entities/Cards/PC/ElevatingTab";

import BookScreen from '@/assets/PC/ElevatingScreen/BookScreen.webp'
import OurClubs from '@/assets/PC/ElevatingScreen/OurClubs.webp'
import PayScreen from '@/assets/PC/ElevatingScreen/PayScreen.webp'


export const ElevatingScreenPc = () => {
    const cards = [
        {
            title: "Loyalty system: achievements and rewards builder",
            icon: <Image src={BookScreen} alt="firstIll" />
        },
        {
            title: "User portal: online-booking and deposit refill",
            icon: <Image src={OurClubs} alt="secondIll" />
        },
        {
            title: "Feedback: customer reviews and ratings",
            icon: <Image src={PayScreen} alt="thirdIll" />
        }
    ]
    return (
        <div className="flex items-center flex-col mt-96">
            <h2 className="text-[64px] text-center w-[80%] text-white font-[700] ">Attract customers with superior service and increase your
                gaming center's revenue.</h2>
            <Paragraph children="Tools to improve the quality of user experience. Guests will want to return and stay longer." className="mt-12 text-center" width="20%" />
            <div className="flex flex-col">
                <div className="flex justify-between gap-10 mt-16">
                    {cards.map((card, index) => (
                        <div className="" key={index}>
                            <ElevatingCard title={card.title} icon={card.icon} />
                        </div>
                    ))}
                </div>
                <ElevatingTab />
            </div>
        </div>
    );
};
