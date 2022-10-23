import React, { useEffect, useState } from 'react';
import {
    useParams,
    useNavigate
  } from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';
import InputPreguntasExamenEstudiante from './PreguntaExamen';
import VerNota from './VerNota';


const PreguntasExamenEstudiante = (props) => {

    const {id,idPregunta} = useParams();
    localStorage.setItem("PreguntaActual" ,JSON.stringify(idPregunta));
    
    let navigate = useNavigate();
    const Inicio = localStorage.getItem('Inicio');
    const Fin = localStorage.getItem('Fin');

    const [estado,setEstado] = useState(true);
    const [estadoidPregunta,setEstadoidPregunta] = useState(idPregunta);
    const [tipoPregunta,setTipoPregunta] = useState(null);
    const [pregunta,setPregunta] = useState([]);
    const [respuestas,setRespuestas]= useState([]);
    const [respuestascorrectas,setRespuestasCorrectas]= useState([]);
    let respuestascorrectasaux = localStorage.getItem('RespuestasSeleccionadas')
    let respuestascorrectasauxarray;
    let RespuestasBandera = false;
    if(respuestascorrectasaux != null ){
        console.log("Respuestas selecionadas"+FuncionPreguntaActual())
        respuestascorrectasauxarray = JSON.parse(respuestascorrectasaux)
        if(respuestascorrectasauxarray.includes(aux => aux.preguntasExamen_IdpreguntasExamen == idPregunta ) == false){
            //setRespuestasCorrectas(respuestascorrectasauxarray)
            RespuestasBandera = true
        }
        
    }else{
        respuestascorrectasauxarray = []
    }

    useEffect(()=>{

        let token = localStorage.getItem('token');

        const dato = {
            datos:{IdpreguntasExamen:idPregunta}
        }

        if (token) {
          axiosClient.post('/ListarPreguntasRespuestas', dato).then((e)=>{
            console.log(e);
            setPregunta(e.pregunta[0]);
            setRespuestas(e.respuestas);
          })
        }
    },[]);


    const handlePregunta = (e)=>{
        setPregunta({
            ...pregunta,
            [e.target.name]: e.target.value
        })
    };

   

    useEffect(() => {
       
        if(FuncionPreguntaActual()){
            window.location.reload()
        }
    },[idPregunta]);

    function FuncionPreguntaActual(){
        let idPreguntaAux = JSON.parse(localStorage.getItem('PreguntaActual'));
        if(parseInt(idPreguntaAux) != idPregunta){
            return true
        }else{
            return false
        } 
    }

    
    const handleclickPreguntasAntes = ()=>{
        if(idPregunta > parseInt(Inicio)){
            navigate(`/Estudiantes/examen/${id}/Pregunta/${(idPregunta-1)}`);
            window.location.reload()
        }
    }

    const handleclickPreguntasSiguiente = ()=>{
        let idPreguntaAux = parseInt(idPregunta) 
        if(parseInt(Fin) > idPregunta){
            idPreguntaAux += 1
            navigate(`/Estudiantes/examen/${id}/Pregunta/${idPreguntaAux}`);
            window.location.reload()
        }
    }

    const handleclickPreguntasEnviar = ()=>{
        
        if (window.confirm("¿Desea enviar el examen?")){

            let token = localStorage.getItem('token');
            let RespuestasSeleccionadas = localStorage.getItem('RespuestasSeleccionadas')
                

            
            if(token && RespuestasSeleccionadas){
                RespuestasSeleccionadas = JSON.parse(RespuestasSeleccionadas)
                const dato = {
                    idexamen: {id},
                    datos:{RespuestasSeleccionadas}
                }

                axiosClient.post('/Calificar', dato).then((e)=>{
                  localStorage.removeItem('RespuestasSeleccionadas')
                  localStorage.removeItem('Inicio')
                  localStorage.removeItem('PreguntaActual')
                  localStorage.removeItem('Fin')
                  let nota = e.nota
                  navigate(`/Estudiantes/VerNota/${id}/${nota}`);
                });
            }
        }
    }
        
     const handleGuardar = (e)=>{
        respuestascorrectasaux = localStorage.getItem('RespuestasSeleccionadas')
        if(respuestascorrectasaux != null ){
            respuestascorrectasauxarray = JSON.parse(respuestascorrectasaux)
            if(pregunta.tipoPregunta == 0 && respuestascorrectasauxarray.length == 0){
                respuestascorrectasauxarray.push(e);
                localStorage.setItem("RespuestasSeleccionadas" ,JSON.stringify(respuestascorrectasauxarray));
            }
            
            if(pregunta.tipoPregunta == 0  ){

                if(respuestascorrectasauxarray.some(aux => aux.preguntasExamen_IdpreguntasExamen ==  e.preguntasExamen_IdpreguntasExamen)){
                    if(respuestascorrectasauxarray.some(aux => aux.respuestasPrguntasExamen ==  e.respuestasPrguntasExamen)){
                        respuestascorrectasauxarray = respuestascorrectasauxarray.filter(aux => aux.respuestasPrguntasExamen !=  e.respuestasPrguntasExamen)
                        if(respuestascorrectasauxarray.length == 0){
    
                            localStorage.removeItem("RespuestasSeleccionadas")
                        }else{
                            localStorage.setItem("RespuestasSeleccionadas" ,JSON.stringify(respuestascorrectasauxarray));
    
                        }
    
                    }else if(respuestascorrectasauxarray.some(aux => aux.respuestasPrguntasExamen !=  e.respuestasPrguntasExamen)){
                        alert("Opcion unica")
                        let inputcheck = document.getElementById("check"+e.iIdrespuestasExamen)
                        inputcheck.checked  = !inputcheck.checked;
    
                    }else{
                        let auxdatos = e
                        auxdatos = e.idPregunta
                        respuestascorrectasauxarray.push(e);
                        localStorage.setItem("RespuestasSeleccionadas" ,JSON.stringify(respuestascorrectasauxarray));
    
                    }
                }else{
                    respuestascorrectasauxarray.push(e);
                    localStorage.setItem("RespuestasSeleccionadas" ,JSON.stringify(respuestascorrectasauxarray));
                }


            }else if(pregunta.tipoPregunta == 1 ){

            }
            
        }else{
            respuestascorrectasauxarray.push(e);
            localStorage.setItem("RespuestasSeleccionadas" ,JSON.stringify(respuestascorrectasauxarray));
        }
     }


  return (
    <>
    <div>-</div>
    
    <div className="card card-primary mr-5 ml-5 mt-3 ">
  <div className="card-header">
    <h3 className="card-title">Pregunta y respuestas</h3>
  </div>
  {/* /.card-header */}
  {/* form start */}
        <form >
            <div className="card-body">
            
           {/*  {/* /.form-group */}
            <div className="form-group text-left text-dark">
                <label>Tipo de pregunta</label>
                <input className="form-control" readOnly={true}  type="text" Value={pregunta.tipoPregunta == 0?'Opción unica':'Opción múltiple'}  />
            </div> 

            

             <InputPreguntasExamenEstudiante tipo={'Pregunta'} id={pregunta.PreguntaExamen} name={"PreguntaExamen"} n={0} verdadera={0} text={pregunta.PreguntaExamen} onChange={handlePregunta} estado={false}></InputPreguntasExamenEstudiante>
            {
                respuestas.map((e,index)=>{
                    return(
                        <InputPreguntasExamenEstudiante posicion={index} tipo={'Respuesta '+(index+1)} id={e.iIdrespuestasExamen} name={"respuestasPrguntasExamen"} namecheck={"EstadoRespuestaPreguntaExamen"} n={index+1} verdadera={e.EstadoRespuestaPreguntaExamen} text={e.respuestasPrguntasExamen} estado={e.EstadoRespuestaPreguntaExamen} onChange={()=>handleGuardar(e)}></InputPreguntasExamenEstudiante>
                    )
                })
            }  
            
            <div  class="alert alert-danger" style={estado? {display :'none'}:{display:'block'}} role="alert">
                Datos incorrectos
            </div> 


            </div>
            {/* /.card-body */}
            <div className="card-footer  d-flex justify-content-around">
                <button type="button" className="btn btn-primary" disabled={(idPregunta == parseInt(Inicio)?true:false)} onClick={()=>handleclickPreguntasAntes()}>Anterior</button>
                {
                    (idPregunta == parseInt(Fin)?
                    <button type="button" className="btn btn-success" onClick={()=>handleclickPreguntasEnviar()}>Enviar</button>
                    :<button type="button" className="btn btn-primary" disabled={(idPregunta == parseInt(Fin)?true:false)} onClick={()=>handleclickPreguntasSiguiente()}>Siguiente</button>)


                }
                
            </div>
        </form>
    </div>
    {/* /.card */}



    </>
  )
}

export default PreguntasExamenEstudiante