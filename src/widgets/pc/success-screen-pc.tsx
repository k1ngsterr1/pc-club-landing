import Image from "next/image";
import ElevatingCard from "@/entities/Cards/PC/ElevatingCard";
import { Paragraph } from "@/shared/ui/Paragraph/PC";
import { ElevatingTab } from "@/entities/Cards/PC/ElevatingTab";
import { SuccessTab } from "@/entities/Tabs/PC/Success";

import BookScreen from '@/assets/PC/ElevatingScreen/BookScreen.webp'
import OurClubs from '@/assets/PC/ElevatingScreen/OurClubs.webp'
import PayScreen from '@/assets/PC/ElevatingScreen/PayScreen.webp'

import styles from './styles.module.scss'


export const SuccessScreenPc = () => {
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
        <div className={`flex items-center flex-col mt-32 ${styles.background}`}>
            <h3 className="text-[64px] text-center text-white font-[700] ">Success stories.</h3>
            <Paragraph children="Tools to improve the quality of user experience. Guests will want to return and stay longer." className="mt-12 text-center" width="20%" />
            <div className="flex flex-col">
                <SuccessTab />
            </div>
        </div>
    );
};
