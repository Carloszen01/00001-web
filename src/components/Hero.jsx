import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

import React, { useState, useEffect } from 'react';


const Hero = () => {
    const [imagenCargada, setImagenCargada] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = robot;

        img.onload = () => {
            setImagenCargada(true);
        };
    }, []);

    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col sm:pl-16 px-6`}>
                <div className='flex flex-row items-center py-[6px] px-4 
                bg-discount-gradient rounded-[10px] mb-2'
                >
                    <img src={discount} alt="descuento" className='w-[32px] h-[32px]' />
                    <p className={`${styles.paragraph} ml-2 leading-[26px]`}>
                        <span className='text-white'>10%</span> De Descuento En Tu {" "}
                        <span className='text-white'>Primera</span> Compra
                    </p>
                </div>

                <div className='flex flex-row justify-betweem items-center w-full lg:min-w-[720px]'>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[70px] text-[48px]
                    text-white ss:leading-[100px] leading-[75px]'>
                        ¿Deseas Mejorar <br className='sm:block hidden' /> {" "}
                        <span className='text-gradient'> Tu Rendimiento
                        </span> {" "}
                    </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted />
                    </div>
                </div>

                <h1 className='font-poppins font-semibold ss:text-[68px] text-[48px]
                    text-white ss:leading-[100px] leading-[75px] w-full'>
                    Cognitivo?
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    ¡Aumenta tu concentración, memoria y estado de ánimo con Utropix!
                </p>
            </div>
            <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
                {imagenCargada ? (
                    <img src={robot} alt="frasco utropix" className='w-[100%] h-[100%] relative z-[5]' />
                ) : (
                    <div></div>
                )}

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] left-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>
            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    )
}

export default Hero