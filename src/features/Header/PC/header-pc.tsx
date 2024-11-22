import styles from "./styles.module.scss";

export const HeaderPC = () => {
    const links = [
        { name: "Главная", link: "#main" },
        { name: "О нас", link: "#about" },
        { name: "Связаться с нами", link: "#feed" },
    ];

    return (
        <header className="flex items-start justify-start">
            <div className="w-[80%] mt-20">
                <div className="flex items-start justify-start gap-10 ">
                    {links.map((link, index) => (
                        <a
                            href={link.link}
                            key={index}
                            className="text-gray text-[20px] font-light"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};
