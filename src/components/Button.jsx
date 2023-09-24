import React from "react";

const Button = ({ styles }) => (
    <a href="https://api.whatsapp.com/send?phone=%2B523325069894&text=%C2%A1Hola!+Quiero+potenciar+mi+mente+con+Utropix+%F0%9F%92%9A%E2%9C%A8">
        <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            Potencia tu mente
        </button>
    </a>
);

export default Button;