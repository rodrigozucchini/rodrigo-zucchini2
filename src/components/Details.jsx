import React from 'react'
import Mockup from '../assets/Mockup-SH800.png'
import './Details.css'

export const Details = () => {
  return (
    <div className='back-details'>
        <div>
            <h1 className='title-details'>Destaca en tu <span className='span-details-title'>industria</span> con una <span className='span-details-title'>página web profesional</span></h1>
            <div className='details'>
                <p className='sub-details'>
                Tu <span className='span-sub-title'>presencia en línea</span> es tu carta de presentación digital, <br />
                la puerta de entrada a oportunidades ilimitadas.<br /><br />
                Desde expandir tu red de contactos hasta mostrar tu experiencia y servicios de manera impactante,<br /> 
                <span className='span-sub-title'>tu sitio web</span> es la herramienta que te diferencia y te posiciona como un líder en tu campo.<br /><br /> 
                <b>Aprovecha al máximo las ventajas que ofrece:</b><br />  
                Aumenta tu visibilidad<br /> 
                Atrae nuevos clientes<br />  
                Consolida tu reputación<br />  
                Alcanza tus metas profesionales.<br /><br /> 
                ¡Invierte en tu <span className='span-sub-title'>éxito</span> hoy mismo!
                </p>
                <img className="img-details" src={Mockup}/>
            </div>
        </div>
    </div>
  )
}
