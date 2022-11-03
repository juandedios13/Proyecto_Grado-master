import React, { useEffect,useState } from 'react'
import {
  useParams,
  useNavigate
} from "react-router-dom";
import '../../style/tablero.css';
import image from '../../style/img/astronauta.png';
import { axiosClient } from '../../config/axiosClient';

const Tablero = () => {
  let navigate = useNavigate();
  let {idContenido,idSubContenido} = useParams();
  const [datos,setDatos] = useState([{NombreTema:"1"}]);
  const [idSubConAnterior,setIdSubConAnterior] = useState(null);
  const [idSubConSiguiente,setIdSubConSiguiente] = useState(null);
  const [botonAnterior,setBotonAnterior] = useState(false);
  const [botonSiguenteTexto,setBotonSiguenteTexto] = useState("Adelante");

  useEffect(()=>{

    let token = localStorage.getItem('token');

    const dato = {
        datos:{idContenido,idSubContenido}
    }

    if (token) {
        axiosClient.post('/ListarSubContenidoCompleto', dato).then(({data})=>{
          console.log(data.ress[0])
          setDatos(data.ress[0])
          return axiosClient.post('/ListarSubContenidoAnteriorSiguente', dato)
        }).then(({data})=>{
          setIdSubConAnterior(data[0].anterior.idSubContenidoDetalle);
          setIdSubConSiguiente(data[0].siguiente.idSubContenidoDetalle);
        })
    }
},[]);  

useEffect(()=>{
  if(idSubConSiguiente == 0){
    setBotonSiguenteTexto("Examen");
  }else{
    setBotonSiguenteTexto("Siguente");
  }
},[idSubConSiguiente])

const handleClickAtras =()=>{
  if(idSubConAnterior == 0){
    setBotonAnterior(true);
  }else{
    navigate(`/Estudiantes/temas/${idContenido}/tablero/${idSubConAnterior}`);
    window.location.href = window.location.href;
  }
};

const handleClickAdelante = ()=>{
  if(idSubConSiguiente == 0){
    localStorage.setItem('LinkAnterior',window.location.href.toString());
    navigate(`/Estudiantes/HacerExamen/${idContenido}`);
  }else{
    navigate(`/Estudiantes/temas/${idContenido}/tablero/${idSubConSiguiente}`);
    window.location.href = window.location.href;
  }
};

  return (
    <div className="contenedor">
      
      <div className="tablero">
        <h1 className='tableroh1'>{datos.NombreTema}</h1>
        <p className='parrafo'>
          {datos.textocontenido}
        </p>
        <div className='TableroDivImg'>
          {
            datos.SubContenidoImg == null?<></>:<img className='imgcontenido' src={process.env[`REACT_APP_BACKEND_${process.env.REACT_APP_ENV === 'dev' ? 'DEV' : 'PROD'}_HOST`]+datos.SubContenidoImg}></img>
          }
        </div>
      </div>
      <div className="imgbtn">
        <div className="img">
          <img  src={image} alt />
        </div>
        <div className="btntablero">
          <input type="button" disabled={botonAnterior} defaultValue="Atrás" onClick={handleClickAtras} />
          <input type="button" Value={botonSiguenteTexto} onClick={handleClickAdelante} />  
        </div>
      </div>
    </div>
  )
}

export default Tablero