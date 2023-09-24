import React, { useState } from "react";
import styles, { layout } from "../style";
import { faq } from "../constants";

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        if (openQuestion === index) {
            setOpenQuestion(null);
        } else {
            setOpenQuestion(index);
        }
    };

    return (
        <section className={`${styles.paddingX} my-16`}>
            <h2 className='font-poppins font-semibold xs:text-[38px] text-[30px]
            text-white xs:leading-[56.8px] leading-[46.8px] w-full mb-5 text-center mb-10 lg:mb-20'>
                Preguntas frecuentes
            </h2>
            <div class={`flex-1 mt-8 lg:mx-12 lg:mt-0 pt-5`}>
                {faq.map((faq, index) => (
                    <div className={`items-center flex-start flex-col mb-10`} key={index}>
                        <button class="flex items-center focus:outline-none" onClick={() => toggleQuestion(index)}>
                            <svg class={`flex-shrink-0 w-6 h-6 ${openQuestion === index ? "text-green-300" : "text-green-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                            <h4 class={`mx-4 font-poppins text-[20px] leading-[32px] text-white ${openQuestion === index ? "text-white" : "text-white dark:text-white"}`}>{faq.title}</h4>
                        </button>
                        <div class={`overflow-hidden transition-all max-h-0 
                        ${openQuestion === index ? "max-h-[300px]" : "max-h-0"}`}>
                            <div class="flex mt-6 md:mx-10">
                                <span class={`border ${openQuestion === index ? "border-green-300" : "border-green-300"}`}></span>
                                <p class={`${styles.paragraph} max-w-4xl px-4 break`}>
                                    {faq.content}
                                </p>
                            </div>
                        </div>
                        <hr class="h-px my-8 bg-gray-500 border-0" />
                    </div>
                ))}
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <a href="https://api.whatsapp.com/send?phone=%2B523325069894&text=%C2%A1Hola!+Tengo+algunas+dudas+sobre+Utropix.">
                    <button type="button" className={`mt-6 py-4 px-6 font-poppins font-medium
                    text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                        Pregúntanos
                    </button>
                </a>
            </div>
        </section>
    );
}

export default FAQ;
