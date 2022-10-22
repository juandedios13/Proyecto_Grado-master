import React from 'react';
import '../../style/PruebaSIncontenido.css'
import {
    Outlet
  } from "react-router-dom";

export const Content = () => {

  let url = window.location.href;
  let urltemp = url;
  let sinCOntenido = false
  console.log("Prueba de sonido "+url+" otro "+urltemp );
  if(url.includes("Panel") && !url.includes("Panel/") ){
    sinCOntenido = true
    console.log("Sin contenido");
  }
    return (
        <div className="content-wrapper">
            
            {
              sinCOntenido == true?<div className='SinContenido'>-Otroperri-</div>:<></> 
            }

            <Outlet>
                
            </Outlet> 
            <div>--</div>
        </div>



    )
}
