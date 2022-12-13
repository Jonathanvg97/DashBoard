import InputConvert from './InputConvert'
import './Convert.css'
import { FaExchangeAlt } from "react-icons/fa";

export default function Convert() {
    return (
        <div className='contenedor'>
            <h2>Comparación de Monedas</h2>

            <div className='input-convert'>
                <InputConvert/>

                <FaExchangeAlt className="icono" />

                <InputConvert/>
            </div>
        </div>
    )
}