import React, { useEffect, useState } from 'react';
import {
    Link,
    useParams,
    useNavigate
  } from "react-router-dom";
  import '../../style/Calificaciones.css'
import { axiosClient } from '../../config/axiosClient';
import Checando from '../../style/img/Calificaciones/1.png'
import ExcelentesNotas from '../../style/img/Calificaciones/2.png'
import QuienLoDejoSubir from '../../style/img/Calificaciones/3.png'

const Calificaciones = (props) => {

    const [Notas, setNotas] = useState([]);
    useEffect  (() => {

         axiosClient.get(`/Calificaciones`).then(({ data }) => {
            console.log(data)
            setNotas(data.Notas)
            
         })
        
      return () => {
      };
    }, []);




    

  return (
    <>
        <div className="contenedornotasexamen">
            <div className="tablanotas">
                <img src={Checando} alt />
                <table className="tablass">
                <tbody>
                    <tr className="tablasstr">
                        <th className="tablassth">Melgar </th>
                        <th className="tablassth">Unidad 1</th>
                        <th className="tablassth">Unidad 2</th>
                        <th className="tablassth">Unidad 3</th>
                        <th className="tablassth">Unidad 4</th>
                        <th className="tablassth">Unidad 5</th>
                        <th className="tablassth">Unidad 6</th>
                        <th className="tablassth">Unidad 7</th>
                        <th className="tablassth">Unidad 8</th>
                    </tr>
                    <tr className="tablasstr">
                        <td className="tablasstd">Nota</td>
                        {
                            
                            Notas.length > 0?
                            Notas.map((e)=>{
                                return(
                                    <td className="tablasstd">{e}</td>
                                )
                            }):<td className="tablasstd">X</td>
                        }
                    </tr>
                </tbody></table>
                <div className="img22">
                <img className="imgdos" src={ExcelentesNotas}  />
                <img className="imgtres" src={QuienLoDejoSubir}  />
                </div> 
                {/* <img class="imgaten" src="img/cinco.PNG" alt="">*/}               
            </div>
        </div>

    </>
    
  )
}

export default Calificaciones