//pc
import { HeaderPC } from "@/features/Header/PC/header-pc";
import { HomeScreenPc } from "@/widgets/pc/home-screen-pc";
import { ElevatingScreenPc } from "@/widgets/pc/elevating-screen-pc";

// import { AboutScreen } from "../../pc/about-screen";
// import { FAQScreen } from "../../pc/faq-screen";
// import { FeaturesScreen } from "../../pc/features-screen";

//mob
// import { HeaderMob } from "@/features/ui/Header/HeaderMob";
// import { AboutUsScreenMob } from "../../mob/AboutUsScreen/about-screen-mob";
// import { FeaturesScreenMob } from "../../mob/FeaturesScreen/features-screen-mob";
// import { HomeScreenMob } from "../../mob/HomeScreen/home-screen-mob";
// import { QuestionsScreenMob } from "../../mob/QuestionsScreen/questions-screen-mob";

import styles from "./styles.module.scss";

export const HomeScreen = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <HeaderPC />
                <HomeScreenPc />
                <ElevatingScreenPc />
                {/* <FeaturesScreen />
                <AboutScreen />
                <FAQScreen /> */}
                <div className={styles.container__mob}>
                    {/* <HeaderMob /> */}
                    <div className={styles.container__mob__background}>
                        {/* <HomeScreenMob /> */}
                    </div>
                    {/* <FeaturesScreenMob />
                <AboutUsScreenMob />
                <QuestionsScreenMob /> */}
                </div>
            </div>
        </div>
    );
};