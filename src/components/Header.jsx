import React from "react";
import Yo from "../assets/yo3.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="back-header">
      <div className="column-left-header">
        <div className="div-h1-header">
          <h1 className="h1-header">
          Lleva tu <span className="span-header">profesión</span><br/> al mundo WEB
          </h1>
        </div>
        
        <div className="div-h2-header">
          <h2 className="h2-header">
          No tener presencia digital<br/> <span className="text-span-2">te quita ventas</span><br/>Nuestra misión es revertirlo.
          </h2>
        </div>
        
        <a to="/planes" className="bottom-header">ACCEDE AHORA</a>
        
      </div>
      <div className="column-right-header">
        <img className="img-header" src={Yo} />
      </div>
    </div>
  );
};

export default Header;