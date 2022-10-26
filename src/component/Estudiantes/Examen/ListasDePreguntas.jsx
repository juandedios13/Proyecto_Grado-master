import React, { useEffect, useState } from 'react';
import {
    Link,
    useParams,
    useNavigate
  } from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';

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

        if (token) {
          axiosClient.post('/ListarPreguntas', datos).then(({data})=> {
            console.log(data.respuesta);
            let ultimo = data.respuesta.length - 1;
            localStorage.setItem("Inicio" ,JSON.stringify(data.respuesta[0].IdpreguntasExamen));
            localStorage.setItem("Fin" ,JSON.stringify(data.respuesta[ultimo].IdpreguntasExamen));
            setdato(data.respuesta);
          });
        }
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
