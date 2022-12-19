import React from 'react'
import './Footer.css'
import LogoAlejandro from './img/LogoAlejandro.svg'
import LogoAndres from './img/LogoAndres.svg'
import LogoAngela from './img/LogoAngela.svg'
import LogoBrayan from './img/LogoBrayan.svg'
import LogoCamila from './img/LogoCamila.svg'
import LogoDylan from './img/LogoDruck.jpeg'
import LogoJesus from './img/LogoJesus.svg'
import LogoNicolas from './img/LogoNicolas.svg'
import LogoJonathan from './img/MarcaPersonal.png'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='footer-up'>
        <div className='footer-p'>
        <p>DESCARGO DE RESPONSABILIDAD IMPORTANTE: todo el contenido disponible en nuestro sitio web, en los sitios web hipervinculados, y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociados ("Sitio") tienen como único objetivo proporcionarle información general procedente de fuentes externas.</p>
        </div>

        <div className="footer-c">
                    <p>Crypto Stadistics</p>
                    <p>© 2022</p>
        </div>

        <div className='footer-down'>
          <p>Developed by</p>

          <div>
            <img src={LogoAndres} alt="Logo Andres" />
            <img src={LogoCamila} alt="Logo Camila" />
            <img src={LogoJesus} alt="Logo Jesus" />
            <img src={LogoBrayan} alt="Logo Brayan" />
            <img src={LogoAlejandro} alt="Logo Alejandro" />
            <img src={LogoAngela} alt="Logo Angela" />
            <img src={LogoNicolas} alt="Logo Nicolas" />
            <img src={LogoJonathan} alt="Logo Jonathan" style={{width:"60px"}}/>
            <img src={LogoDylan} alt="Logo Dylan" />
          </div>
        </div>
      </div>
    </div>
  )
}
