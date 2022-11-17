import React, { useEffect, useState } from 'react';
import {
    Link,
    useParams,
    useNavigate
  } from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';
import imageAprobo from '../../../style/img/aprobado.png';
import imagePerdio from '../../../style/img/noaprobado.png';

const VerNota = (props) => {

    let navigate = useNavigate();
    const {id,nota} = useParams();
    let nombreExamen = ''
    let texto = ' Calificación : ' + nota +' puntos de 10';
    useEffect(() => {

       if(nota >= 6){
        alert("Has conseguido un nuevo logro ¡Felicitaciones!")
       }

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
                    <img className="card-img-top" src={nota > 5 ?imageAprobo:imagePerdio} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text text-dark font-weight-bold" >{
                            texto
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