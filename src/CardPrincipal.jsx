import './CardPrincipal.css'
import { FaPlay } from "react-icons/fa";

export default function CardPrincipal() {
    return (
        <>
            <article className="cripto-first">
                <div className="cripto-first">
                    <img src="" alt="Icono de la cripto" />

                    <h2>Nombre de la Cripto - USD - %</h2>

                    <h2><FaPlay/></h2>
                </div>

                <div className="graphic">
                    {/* Grafico */}
                </div>

                <div className="capitalization"> 
                    <h2>Capitalización</h2>

                    <table className="capitalization-table">
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>23h</th>
                                <th>7d</th>
                                <th>1m</th>
                                <th>1y</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    )
}