import styles from '../style'
import { test, test2 } from '../assets'

import ReactPixel from 'react-facebook-pixel'

ReactPixel.init('858411422659360', {}, { debug: false, autoConfig: true });
ReactPixel.pageView();


const Promo = () => {
    return (
        <div className={`w-full flex flex-col justify-center ${styles.marginY}`}>
            <div className='flex justify-center'>
                <img className='z-[100] ss:flex hidden justify-center items-center w-full max-w-[900px]' src={test} alt="promoción $299" />
                <img className='z-[100] ss:hidden flex flex justify-center items-center' src={test2} alt="romoción $299" />
            </div>
            <div className="flex justify-center relative botton-0 lg:left-0 left-0 lg:right-0 right-0 text-center">
                <a href="https://api.whatsapp.com/send?phone=%2B523325069894&text=%C2%A1Hola!+Quiero+potenciar+mi+mente+con+Utropix+%F0%9F%92%9A%E2%9C%A8">
                    <button
                        onClick={() =>
                            ReactPixel.track('ViewContent', {
                                content_name: 'Promo',
                                content_category: 'Utropix',
                                content_ids: ['1'],
                                content_type: 'product',
                                value: 299,
                                currency: 'MXN',
                            })}
                        type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} Promo_button`}>
                        Prueba Utropix
                    </button>
                </a>
            </div>
            <div className="absolute z-[0] w-[20%] h-[20%] right-[50%] rounded-full green__gradient bottom-18" />
            <div className="absolute z-[0] w-[10%] h-[10%] right-[50%] rounded-full white__gradient bottom-18" />
            <div className="absolute z-[0] w-[20%] h-[30%] left-[60%] rounded-full blue__gradient bottom-08" />
        </div>
    )
}

export default Promo