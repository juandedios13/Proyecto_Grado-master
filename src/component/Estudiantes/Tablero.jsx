import React, { useEffect,useState } from 'react'
import {
  useParams,
  useNavigate
} from "react-router-dom";
import '../../style/tablero.css';
import image from '../../style/img/astronauta.png';

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

    if(token != undefined && token != null ){
        let tokenn = JSON.parse(token);
        let datosApi = {  
            method: 'post',
            body: JSON.stringify(dato),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': JSON.stringify( tokenn.token)
            }
        }

        fetch("http://localhost:3001/ListarSubContenidoCompleto",datosApi).then((e)=>{
            return e.json(); 
        }).then((e)=>{
          console.log(e.ress[0])
          setDatos(e.ress[0])

          fetch("http://localhost:3001/ListarSubContenidoAnteriorSiguente",datosApi).then((e)=>{
            return e.json(); 
          }).then((e)=>{
            setIdSubConAnterior(e[0].anterior.idSubContenidoDetalle);
            setIdSubConSiguiente(e[0].siguiente.idSubContenidoDetalle);
          });
        });
    }else{
        
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
            datos.SubContenidoImg == null?<></>:<img className='imgcontenido' src={'http://localhost:3001/'+datos.SubContenidoImg}></img>
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