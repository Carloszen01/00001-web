import React, { useState } from "react";
import { beneficios } from "../constants";
import styles from "../style";

const Beneficios = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <section id="beneficios"
            className={`
                items-start justify-center flex ${styles.paddingX} flex-wrap
                mt-20 relative pb-28`}
        >
            <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px]
                text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center mb-4 lg:mb-20">
                Tú, pero mejor
            </h2>
            {beneficios.map((stat) => (
                <div
                    key={stat.id}
                    className={`flex-1 flex items-center sm:px-10
                    flex-col px-5 mb-10 min-w-[300px] md:ml-10 ml-0 md:mt-0 mt-10`}
                >
                    <img src={stat.icon} alt={stat.title} className="pb-7 max-w-[90px]" />
                    <h4 className="font-poppins font-semibold text-[20px]
                        pb-2 leading-[32px] text-white">
                        {stat.title}
                    </h4>
                    <p className="font-poppins font-normal text-[16px]
                        leading-[24px] text-dimWhite max-w-[400px] text-left">
                        {showLinks ? (
                            <>
                                <a className="font-poppins font-normal text-[16px]
                                leading-[24px] text-dimWhite max-w-[400px]" href={stat.link1}>
                                    {stat.e1}
                                </a>
                                <br />
                                <a href={stat.link2} className="font-poppins font-normal text-[16px]
                                leading-[24px] text-dimWhite max-w-[400px]">
                                    {stat.e2}
                                </a>
                                <br />
                                <a href={stat.link3} className="font-poppins font-normal text-[16px]
                                leading-[24px] text-dimWhite max-w-[400px]">
                                    {stat.e3}
                                </a>
                            </>
                        ) : (
                            stat.content
                        )}
                    </p>
                </div>
            ))}
            <div className="flex justify-center absolute bottom-12 lg:left-[0px] left-[0px] lg:right-0 right-0 text-center">
                <div
                    className={`${styles.flexCenter} mt-6 w-[160px] h-[40px] rounded-[10px] bg-blue-gradient p-[1px]
                    cursor-pointer`}
                >
                    <div
                        className={`${styles.flexCenter} items-center bg-primary w-[100%] h-[100%] rounded-[10px]`}
                    >
                        <p
                            type="button"
                            className={`font-poppins font-medium text-[18px]
                            text-primary text-green-100 outline-none ${styles}`}
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
