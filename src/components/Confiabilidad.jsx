import { lions } from "../assets";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`py-0 flex flex-row rounded-[20px] lg:px-5 ${index !== features.length - 1 ? "mb-6" : "mb-0"} `}>
        <div className={`hidden w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <div className="flex flex-col items-center justify-center h-full">
                <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
            </div>
        </div>

        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
            <hr class="h-px my-6 bg-gray-500 border-0" />

        </div>
    </div>
);

const Confiabilidad = () => (
    <section id="producto" className={`${layout.section} sm:p-10 p-6 bg-black-gradient pb-10
    my-2 min-w-[140px] rounded-xl sidebar`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className='font-poppins font-semibold xs:text-[38px] text-[30px]
            text-white xs:leading-[56.8px] leading-[46.8px] w-full mb-5'>
                Ingredientes seguros, <br className="sm:block hidden" /> puros y orgánicos.
            </h2>
            <p className={`${styles.paragraph} max-w-[700px]`}>La Melena de León es un hongo medicinal con potentes beneficios cognitivos. Nuestras cápsulas están elaboradas con ingredientes seguros, puros y orgánicos para que puedas disfrutar de todos sus beneficios sin preocupaciones.</p>
            <img src={lions} alt="Hongo Melena de León" className="dark:shadow-gray-800
             h-auto max-w rounded-lg shadow mt-8 max-w-[600px] w-[100%]"/>
        </div>

        <div className={`flex-1 flex max-w-[700px]
        md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button styles={`mt-0 sm:mt-10`} />
            </div>
        </div>
    </section>
);

export default Confiabilidad;