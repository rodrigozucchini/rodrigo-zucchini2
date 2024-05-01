import React from 'react'
import './Exito.css'
import FiselC from '../assets/f-client.png'
import Finanzas from '../assets/nisi.png'

export const Exito = () => {
  return (
    <div className='back-exito'>
        <div>
            <h1 className='title-exito'>Casos de <span className="exito-span">éxito</span></h1>
            <p className='sub-exito'>Sitio web de FISEL</p>
            <div className='back-exito-column'>
                <img className="img-exito" src={FiselC}/>
                <div>
                    <h1 className='sub-exito-desc'>CLAVES</h1>
                    <div className='exito-detail'>
                        <p className='d-exito'>Se optimizó el diseño web Responsive duplicando <br/> las visitas a través de Smartphones.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>La Conversion aumentó un 27%.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>Se creo un panel de administrador <br/>para que el cliente cambie banners y escriba noticias.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>Se implemento un formulario directo al correo del cliente <br/> para facilidad de lectura de datos.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>Se creo un sistema de planes para jerarquias<br/> de usuarios dentro del sitio.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>Se arcordó un mantenimiento mensual<br/> y cambios que el cliente considere optimo.</p>
                    </div>
                </div>
            </div>
            <p className='sub-exito'>Sitio web de FINANZAS</p>
            <div className='back-exito-column'>
                <img className="img-exito" src={Finanzas}/>
                <div>
                    <h1 className='sub-exito-desc'>CLAVES</h1>
                    <div className='exito-detail'>
                        <p className='d-exito'>Se logró una adaptación a Tablet y Smartphones.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>Aumentó sus ventas un 300%.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>Nos adaptamos al presupuesto del cliente <br/>obteniendo un precio-calidad óptimo.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>Se implemento un formulario directo al correo <br/>del cliente para facilidad de lectura de datos.</p>
                    </div>
                    <div className='exito-detail'>
                        <p className='d-exito'>Se implemento un boton de redireccionamiento a <br/>Redes Sociales y WhatsApp.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
