import React ,{ useEffect,useState } from 'react'
import {
  useParams,
  useNavigate
} from "react-router-dom";
import '../../style/Temas.css'
import image from '../../style/img/astronautatexto.png'
import Litemas from './Litemas';
import { axiosClient } from '../../config/axiosClient';

const Temas = () => {

  const {id} = useParams();
  const [datos,setDatos] = useState([{NombreTema:"1"}]);

  useEffect(()=>{

      let token = localStorage.getItem('token');

      const dato = {
          datos:{id}
      }

      if(token != undefined && token != null ){

          axiosClient.post('/ListarSubContenido', dato).then(({data: e})=>{
              console.log(e.ress)
              setDatos(e.ress)
          });
      }else{
          
      }

  },[]);

  let navigate = useNavigate();

  const handleclick = (idSubContenido) =>{
    navigate(`tablero/${idSubContenido}`);
  }

  const handleclickExamen = (idSubContenido) =>{
    localStorage.setItem('LinkAnterior',window.location.href.toString());
    navigate(`/Estudiantes/HacerExamen/${id}`);
  } 

  return (
    <div className="contenedor">
      <div className="cajauno">
        <img className="img" src={image} alt />
      </div>
      <div className="cajados">
        <h1 className="titulo">Temas </h1>
        <ol>
          
          <Litemas datos={datos} click={handleclick} />
          <li onClick={handleclickExamen} ><a href=''>Examen</a></li>
         
        </ol>
      </div>
    </div>

  )
}

export default Temas