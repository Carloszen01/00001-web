import styles from '../style'
import { test, test2 } from '../assets'

const Promo = () => {
    return (
        <div className='w-full ss:px-10 mb-10'>
            <img className='ss:flex hidden' src={test} alt="promoción $299" />
            <img className='ss:hidden flex' src={test2} alt="romoción $299" />
            <div className="flex justify-center relative botton-0 lg:left-0 left-0 lg:right-0 right-0 text-center">
                <div className={`${styles.flexCenter} mt-6 w-[200px] h-[50px] rounded-[10px] bg-blue-gradient p-[1px] cursor-pointer`}>
                    <div className={`${styles.flexCenter} items-center bg-primary w-[100%] h-[100%] rounded-[10px]`}>
                        <p
                            type="button"
                            className={`font-poppins font-medium text-[18px] text-primary text-white outline-none`}
                        >
                            Prueba Utropix
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo