import React, { useEffect, useState } from 'react';
import {
    Link,
    useParams,
    useNavigate
  } from "react-router-dom";

const ListasDePreguntas = () => {

    let navigate = useNavigate();
    const {id} = useParams();
    const [dato, setdato] = useState([]);
    
    useEffect(() => {

        console.log(id);

        let token = localStorage.getItem('token');

        const datos = {
            datos:{idexamen:id}
        }

        if(token != undefined && token != null ){
            let tokenn = JSON.parse(token);
            let datosApi = {  
                method: 'post',
                body: JSON.stringify(datos),
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': JSON.stringify( tokenn.token)
                }
            }

            fetch("http://localhost:3001/ListarPreguntas",datosApi).then((e)=>{
                return e.json(); 
            }).then((e)=>{
                console.log(e.respuesta);
                let ultimo = e.respuesta.length - 1;
                localStorage.setItem("Inicio" ,JSON.stringify(e.respuesta[0].IdpreguntasExamen));
                localStorage.setItem("Fin" ,JSON.stringify(e.respuesta[ultimo].IdpreguntasExamen));
                setdato(e.respuesta);
            });
        }else{
            
        }
      return () => {
      };
    }, []);

    const handleclickPreguntas = (idPregunta)=>{
        console.log(idPregunta)
        navigate(`Pregunta/${idPregunta}`);
    }

  return (
    <>
        <div>-</div>
        
        <div className="card card-primary mr-5 ml-5 mt-3 ">
            <div className="card-header">{/* /.card-header */}
                <h3 className="card-title">Preguntas</h3>
            </div>
    
            <ul className="list-group list-group-flush">
                {
                    dato.map((e,index)=>{
                        return (
                            <li key={index+1} className="list-group-item flex"> 
                                <p class="card-text text-dark">{e.PreguntaExamen}</p>
                                <button type="button" class="btn btn-primary" onClick={()=>handleclickPreguntas(e.IdpreguntasExamen)}> Resolver</button>
                            </li>
                        )   
                    })
                }
                <li className="list-group-item d-flex justify-content-around"> 
                    <h4 class="card-text text-dark ">Preguntas  0/{dato.length} </h4>
                    <button type="button" class="btn btn-success ">Enviar</button>
                </li>
            </ul>
        </div>{/* /.card */}
    </>
  )
}

export default ListasDePreguntas
