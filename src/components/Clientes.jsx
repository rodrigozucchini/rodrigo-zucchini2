import React from 'react'
import './Clientes.css'

export const Clientes = () => {
  return (
    <div className='back-clientes'>
        <div className='clientes'>
            <h1 className='title-clientes'>¿Para quiénes <span className='span-clientes-1'>SI</span> va dirigido?</h1>
            <p className='sub-clientes'>
            A ti que quieres una <span className='span-clientes-sub'>LANDING</span> que busca llegar a más clientes<br/>
            A ti que quieres una <span className='span-clientes-sub'>PAGINA DE PRESENTACION</span> personalizada<br/>
            A ti que quieres un <span className='span-clientes-sub'>SITIO WEB ESPECIALIZADO</span> que desea exhibir informacion del negocio/servicio/productos<br/>
            Me especializo en crear páginas web únicas para <span className='span-clientes-sub'>todo tipo de profesionales</span> en su área.<br/>

            </p>
        </div>
        <div className='clientes'>
            <h1 className='title-clientes'>❌¿Para quiénes <span className='span-clientes-2'>NO</span> va dirigido?❌</h1>
            <p className='sub-clientes'>
            <span className='span-clientes-sub-2'>No realizo ECCOMERCE</span><br/>
            <span className='span-clientes-sub-2'>No realizo REDES SOCIALES</span><br/>
            <span className='span-clientes-sub-2'>No realizo JUEGOS EN LÍNEA</span><br/>
            <span className='span-clientes-sub-2'>No trabajo con personas sin pasión</span> ya que quiero tambien aprender de cada cliente<br/><br/> 
            </p>
        </div>
    </div>
  )
}
