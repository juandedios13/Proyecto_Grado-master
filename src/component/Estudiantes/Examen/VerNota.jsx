import React, { useEffect, useState } from 'react';
import {
    Link,
    useParams,
    useNavigate
  } from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';

const VerNota = (props) => {

    let navigate = useNavigate();
    const {id,nota} = useParams();
    let nombreExamen = ''
    let textoPaso = 'Felicidades pasaste el examen con una nota de ' + nota;
    let textoPerdio = 'No te preocupes pues volver a mirar los contenidos de la unidad para repasar los temas. La note de tu examen es ' + nota;
    useEffect(() => {

       

        const datos = {
            datos:{idexamen:id}
        }
        // axiosClient.get(`/NombreExamen/${id}`).then(({ data }) => {



        // })
        
      return () => {
      };
    }, []);

    const handleclickPreguntas = (idPregunta)=>{
        // console.log(idPregunta)
        // navigate(`Pregunta/${idPregunta}`);
    }

    const handleclickInicio = ()=>{
            
        navigate(`/Estudiantes`);
    }

  return (
    <>
        <div>-</div>
    
        <div className="card card-primary mr-5 ml-5 mt-3 ">
            <div className="card-header">
                <h3 className="card-title">Nota</h3>
            </div>
            <div className='d-flex center flex-wrap justify-content-around m-2'>
                <div className="card" style={{width: '20rem'}}>
                    <div className="card-body">
                        <p className="card-text text-dark font-weight-bold" >{
                            nota > 5 ?textoPaso:textoPerdio
                        }</p>
                    </div>
                </div>
                
            </div>
            <button type="button" className="btn btn-primary  m-3"  onClick={()=>handleclickInicio()}>Inicio</button>
            
        </div>{/* /.card */}
    </>
    
  )
}

export default VerNota