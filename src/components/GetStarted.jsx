import styles from '../style';
import { arrowUp } from '../assets';

import ReactPixel from 'react-facebook-pixel'

ReactPixel.init('858411422659360', {}, { debug: false, autoConfig: true });
ReactPixel.pageView();

const GetStarted = () => {
    return (
        <a
            className='Hero_button'
            onClick={() =>
                ReactPixel.track('ViewContent', {
                    content_name: 'Botón Hero',
                    content_category: 'Utropix',
                    content_ids: ['1'],
                    content_type: 'product',
                    value: 0.5,
                    currency: 'USD',
                })
            }
            href="https://api.whatsapp.com/send?phone=%2B523325069894&text=%C2%A1Hola!+Quiero+potenciar+mi+mente+con+Utropix+%F0%9F%92%9A%E2%9C%A8">
            <div className={`${styles.flexCenter} w-[145px] h-[145px] rounded-full bg-blue-gradient p-[2px]
        cursor-pointer`}>
                <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                    <div className={`${styles.flexStart} flex-row pb-2`}>
                        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                            <span className='text-gradient'>¡Potencia</span>
                        </p>
                        <img src={arrowUp} className='w-[23px] h-[23px] objetc-contain' alt='arrow' />
                    </div>

                    <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                        <span className='text-gradient'>Tu Mente!</span>
                    </p>
                </div>
            </div>
        </a>
    )
}

export default GetStarted