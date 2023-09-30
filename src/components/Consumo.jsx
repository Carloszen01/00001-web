import { consumo } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`py-3 flex flex-col rounded-[20px] lg:px-5 ${index !== consumo.length - 1 ? "mb-6" : "mb-0"} `}>
        <div className="flex flex-1 flex-row mb-2 items-center">
            <div className={`min-w-[44px] min-h-[44px] max-w-[44px] max-h-[44px] rounded-full
            ${styles.flexCenter} bg-dimBlue mr-2`}>
                <img src={icon} alt="star" className="w-[65%] h-[65%] object-contain" />
            </div>
            <h4 className="font-poppins font-semibold text-[20px]
                leading-[32px] text-white">
                {title}
            </h4>
        </div>
        <div className="flex-1 flex flex-col ml-3">

            <p className={`${styles.paragraph}`}>
                {content}
            </p>
        </div>
    </div>
);

const Consumo = () => (
    <section id="consumo" className={`flex flex-col ${styles.paddingY} sm:p-10 p-6 pb-10
    my-2 min-w-[140px] rounded-xl sidebar ${styles.flexCenter} mt-5`}>
        <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px]
        text-white xs:leading-[56.8px] leading-[46.8px] w-full text-center lg:mb-20 mb-5">
            Guía completa para Utropix
        </h2>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full green__gradient bottom-30" />
        <div className={`flex-1 flex max-w-[900px]
        md:ml-10 ml-0 md:mt-0 relative flex-col`}>
            {consumo.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button styles={`mt-10`} />
            </div>
        </div>
    </section>
);

export default Consumo;