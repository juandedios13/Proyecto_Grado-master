import React, { useEffect, useState } from 'react';
import {
    useParams,
    useNavigate
  } from "react-router-dom";
import InputPreguntasExamenEstudiante from './PreguntaExamen';


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
        RespuestasBandera = false
        respuestascorrectasauxarray = []
    }
    // const [datos,setDatos] =  useState({
    //     pregunta:[{
    //         PreguntaExamen:"",
    //     }],
    //     respuestas:[
    //         {
    //             "iIdrespuestasExamen": "",
    //             "EstadoRespuestaPreguntaExamen": "",
    //             "respuestasPrguntasExamen": "",
    //             "preguntasExamen_IdpreguntasExamen": ""
    //         }
    //     ]
        

    // });

    useEffect(()=>{

        let token = localStorage.getItem('token');

        const dato = {
            datos:{IdpreguntasExamen:idPregunta}
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

            console.log(datosApi)

            fetch("http://localhost:3001/ListarPreguntasRespuestas",datosApi).then((e)=>{
                return e.json(); 
            }).then((e)=>{
                console.log(e);
                setPregunta(e.pregunta[0]);
                setRespuestas(e.respuestas);
            });
        }else{
            
        }

    },[]);


    const handlePregunta = (e)=>{
        console.log(e.target.name);
        setPregunta({
            ...pregunta,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        //console.log(e.target[3]);
        let datos = e.target;
        //console.log(datos[0]);
        let respuesta =  respuestas;
        console.log(respuesta);
        let tipo , n = 0;

        for (let index = 0; index < datos.length; index++) {
            //console.log(datos[index])
            if(datos[index].id != undefined ){
                respuesta = respuesta.map((e)=>{
                    //console.log(datos[index].id);
                    if(datos[index].id == e.iIdrespuestasExamen){
                        
                        if(datos[index].name == 'respuestasPrguntasExamen'){
                            return({...e,
                                    [e.respuestasPrguntasExamen]:datos[index].value})
                        }else if(datos[index].name == 'EstadoRespuestaPreguntaExamen'){
                            console.log(e.EstadoRespuestaPreguntaExamen);
                            let estado = datos[index].checked == true?1:0;
                            //n = estado == 1?n+1:n+0;
                            if(estado == 1){
                              n = n + 1;
                            }
                            return({...e,
                                    ['EstadoRespuestaPreguntaExamen']:estado}
                            )
                        }
                    }else if(datos[index].name == 'tipo'){
                        tipo = datos[index].value;
                        console.log("tipo entro")
                        setTipoPregunta(tipo);
                    }
                    return e;
                })
            }
                                
        }
        console.log(pregunta)
        console.log(respuesta);
        console.log("n",n)
        console.log("tipo",tipo)
        if(tipo == 1 && n>1){
            setEstado(true);
        }else if(tipo == 0 && n == 1){
          //console.log("pasa tipo 0")
            setEstado(true);
        }else{
            setEstado(false);
        }


        if(estado){
            console.log('ooooooooooooooooooooooooo')
        }
         //datos.map((e)=>{

            //if(e.name == "respuestasPrguntasExamen"){
              //  console.log(e);
          // }

            //return e;
        //})
        //console.log(respuestas);

        

    }

    /*
    useEffect(() => {
      // Actualiza el título del documento usando la API del navegador
      if(false){
        console.log("entro useEffect");
        let url = "http://localhost:3001/Update/Examen";
        let datos = {
            tipo : tipoPregunta,
            pregunta: pregunta,
            respuestas: respuestas
        }
        console.log(datos)
        let datosApi = {
            method: 'put',
            body:JSON.stringify({
                datos
            }),
            headers:{
                'Content-Type': 'application/json',
            }
        } 
        fetch(url,datosApi ).then((e)=>{
                if(e.status === 200){
                    return e.json();     
                }else if(e.status >= 400){
                    alert('Error');
                }
        }).then((e)=>{
                    
        });

    }
    },[estado]);
    */

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
                

            
            if(token != undefined && token != null && RespuestasSeleccionadas != null ){
                RespuestasSeleccionadas = JSON.parse(RespuestasSeleccionadas)
                const dato = {
                    idexamen: {id},
                    datos:{RespuestasSeleccionadas}
                }
    
                let tokenn = JSON.parse(token);
                let datosApi = {  
                    method: 'post',
                    body: JSON.stringify(dato),
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': JSON.stringify( tokenn.token)
                    }
                }

                fetch("http://localhost:3001/ListarPreguntasRespuestas",datosApi).then((e)=>{
                    return e.json(); 
                }).then((e)=>{
                    console.log(e);
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
        <form onSubmit={handleSubmit}>
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