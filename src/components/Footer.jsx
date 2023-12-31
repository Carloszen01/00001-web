import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <section id="contacto" className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col`}>
        <div className={`${styles.flexStart} flex-col mb-8`}>
            <div className={`${styles.flexCenter} flex-[1] flex-col sm:mb-5`}>
                <img
                    src={logo}
                    alt="utropix"
                    className="w-[266px] h-[72.14px] object-contain"
                />
                <p className={`${styles.paragraph} mt-4 max-w-[312px] text-center`}>

                </p>
            </div>

            <div className=" text-center flex-[1.5] w-full flex flex-row justify-center flex-wrap md:mt-0 mt-0">
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {footerlink.title}
                        </h4>
                        <ul className="list-none mt-4">
                            {footerlink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-green-200 cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                >
                                    <a href={`#${link.id}`}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={`flex flex-row mt-6 justify-center items-center w-full`}>
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[25px] h-[25px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>

        <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright © 2023 Utropix. Todos Los Derechos Reservados.
            </p>
        </div>
    </section>
);

export default Footer;