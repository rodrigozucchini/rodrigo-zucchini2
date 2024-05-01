import React from "react";
import Afiliado1 from "../assets/logo-cumbre.png";
import Afiliado2 from "../assets/logo-elite.jpg";
import Afiliado3 from "../assets/logo-fisel.png";
import Afiliado4 from "../assets/logo-nisi.png";
import Afiliado5 from "../assets/logo-profit.jpeg";
import Afiliado6 from "../assets/logo-shark.png";
import Afiliado7 from "../assets/logo-yess.jpg";

import "./Partners.css";


const Partners = () => {
  return (
    <div className='back-alianzas'>
        <h1 className='title-alianzas'>CON MIS SERVICIOS HE AYUDADO A:</h1>
        <div className='back-logos-hoteles'>
            <div className='logos-hoteles'>
                <img src={Afiliado5} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Afiliado1} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Afiliado2} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Afiliado4} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Afiliado3} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Afiliado7} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Afiliado6} className='hoteles'/>
            </div>
        </div>
    </div>
  )
}

export default Partners;