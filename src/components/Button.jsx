import React from "react";

import ReactPixel from 'react-facebook-pixel'

ReactPixel.init('858411422659360', {}, { debug: false, autoConfig: true });
ReactPixel.pageView();

const Button = ({ styles }) => (
    <a
        href="https://api.whatsapp.com/send?phone=%2B523325069894&text=%C2%A1Hola!+Quiero+potenciar+mi+mente+con+Utropix+%F0%9F%92%9A%E2%9C%A8">
        <button type="button"
            onClick={() =>
                ReactPixel.track('ViewContent', {
                    content_name: 'Botón CTA',
                    content_category: 'Utropix',
                    content_ids: ['1'],
                    content_type: 'product',
                    value: 299,
                    currency: 'MXN',
                })
            } className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} CTA_button`}>
            Potencia tu mente
        </button>
    </a>
);

export default Button;