import { Paragraph } from "@/shared/ui/Paragraph/PC";
import { Button } from "@/shared/ui/Button/PC";
import Image from "next/image";

import styles from './styles.module.scss'

import ArrowRight from '@/assets/PC/arrow-right'
import HomeScreenPhones from '@/assets/PC/HomeScreen/HomeScreenPhones.webp'

export const HomeScreenPc = () => {
    return (
        <div className={`flex items-start justify-start mt-32 ${styles.background}`}>
            <div className="w-[80%]">
                <h1 className="text-[64px] text-white font-[700] w-[70%]">Мобильное приложение для Вашего <span className="text-yellow">клуба!</span></h1>
                <Paragraph children="Приложение, которое упрощает управление вашим клубом и делает его удобным для клиентов." width="45%" className="mt-12" />
                <div className="flex items-center  gap-10 mt-14">
                    <Button text="Связаться с нами" />
                    <div className="flex items-center">
                        <Button text="Подробнее" buttontype="filled" />
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div className={styles.home_screen_image}>
                <Image
                    src={HomeScreenPhones}
                    alt="Mobile app screens"
                    width={2000}
                    height={600}
                    // layout="intrinsic"
                    quality={100}
                />
            </div>
        </div>
    );
};
