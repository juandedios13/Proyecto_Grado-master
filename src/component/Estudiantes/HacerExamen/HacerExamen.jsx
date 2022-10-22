import React, { useEffect,useState } from 'react'
import {
  useParams,
  useNavigate
} from "react-router-dom";
import '../../../style/HacerExamen.css';
import imageUno from '../../../style/img/HacerExamen/uno.PNG';
import imageDos from '../../../style/img/HacerExamen/dos.PNG';
import imageTres from '../../../style/img/HacerExamen/tres.PNG';
import imageCuatro from '../../../style/img/HacerExamen/cuatro.PNG';
import imageCinco from '../../../style/img/HacerExamen/cinco.PNG'; 
import imageSeis from '../../../style/img/HacerExamen/seis.PNG';
import imageSiete from '../../../style/img/HacerExamen/siete.PNG';
import imageOcho from '../../../style/img/HacerExamen/ocho.PNG';



const HacerExamen = () => {

  let navigate = useNavigate();
  let {id} = useParams();
  const imagenes = [ 
     imageUno,
     imageDos,
     imageTres,
     imageCuatro,
     imageCinco,
     imageSeis,
     imageSiete,
     imageOcho
    ] 

    const handleClickAdelante = ()=>{
      navigate(`/Estudiantes/examen/${id}`);
      
    };

    const handleClickRegresar = ()=>{
      let url = localStorage.getItem('LinkAnterior');

      if(url !== undefined && url !== null){
        window.location.href = url
      }
    };

  return (
    <>
      <div className="contenedoruno">
        <div className="btnatencion">
          <a className="abtnaten" >
            <input className="btnaten" type="button" onClick={handleClickRegresar} defaultValue="Regresar" />
          </a>
        </div>
        <div className="imgatencion">
          <img className="imgaten" src={imagenes[id-1]} alt />                
        </div>
        <div className="btnatencion">
          <a className="abtnaten" >
            <input className="btnaten" type="button" onClick={handleClickAdelante} defaultValue="Hacer examen" />    
          </a>
        </div>
      </div>
    </>
  )
}

export default HacerExamen