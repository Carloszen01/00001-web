import React, { useState } from "react";
import { beneficios } from "../constants";
import styles from "../style";

const Beneficios = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <section
            id="beneficios"
            className={`items-start justify-center flex flex-wrap mt-20 relative pb-28`}
        >
            <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px]
            text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center mb-5 lg:mb-20">
                Tú, pero mejor
            </h2>
            <div className="flex-1 flex-wrap flex justify-center flex-row items-start">
                {beneficios.map((stat, index) => (
                    <div
                        key={stat.id}
                        className={`flex-1 flex-wrap flex items-center
                         flex-col mb-5 md:mb-10 min-w-full sm:min-w-[600px] max-w-[600px]
                         md:mt-0 mt-5 px-6 sm:px-9 pb-10`}
                    >
                        <img src={stat.icon} alt={stat.title} className="pb-3 max-w-[90px]" />
                        <h4 className="font-poppins font-semibold text-[18px] pb-2 leading-[24px] text-white">
                            {stat.title}
                        </h4>
                        <p className={styles.paragraph}>
                            {showLinks ? (
                                <>
                                    <a className="font-poppins font-normal text-[14px] leading-[20px] text-dimWhite max-w-[300px]" href={stat.link1}>
                                        {stat.e1}
                                    </a>
                                    <br />
                                    <a href={stat.link2} className="font-poppins font-normal text-[14px] leading-[20px] text-dimWhite max-w-[300px]">
                                        {stat.e2}
                                    </a>
                                    <br />
                                    <a href={stat.link3} className="font-poppins font-normal text-[14px] leading-[20px] text-dimWhite max-w-[300px]">
                                        {stat.e3}
                                    </a>
                                </>
                            ) : (
                                <span className={styles.paragraph}>{stat.content}</span>
                            )}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center absolute bottom-12 lg:left-0 left-0 lg:right-0 right-0 text-center">
                <div className={`${styles.flexCenter} mt-6 w-[160px] h-[40px] rounded-[10px] bg-blue-gradient p-[1px] cursor-pointer`}>
                    <div className={`${styles.flexCenter} items-center bg-primary w-[100%] h-[100%] rounded-[10px]`}>
                        <p
                            type="button"
                            className={`font-poppins font-medium text-[14px] text-primary text-[#C0F6E3] outline-none ${styles}`}
                            onClick={() => setShowLinks(!showLinks)}
                        >
                            {showLinks ? "Ver beneficios" : "Ver estudios"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beneficios;
