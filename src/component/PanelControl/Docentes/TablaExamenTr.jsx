import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';

const TablaExamenTr = () => {
   
    const [dato, setdato] = useState([]);
    
    useEffect(() => {
      let token = localStorage.getItem('token')

      if (token) {
        axiosClient.post('/ListarExamenes').then(({data})=>{
          //console.log(e.respuesta);
          setdato(data.respuesta);
        });
      }
    }, []);

  return (
    <>

        {
            
            dato.length>0 ?   

            dato.map((e,index)=>{
                return (<tr key={index+1}>
                    <th className='text-dark' scope="row">{index+1}</th>
                    <td className='text-dark text-justify' >{e.NombreExamen}</td>
                    <td className='text-dark text-justify' >{e.NombreContenido}</td>
                    <td className='text-dark ' >{e.Npreguntas}</td>
                    <td> <Link to={`/Panel/Preguntas/${e.Idexamen}`} className='nav-link'><i className='nav-icon fas fa-edit'>Visualizar</i> </Link> </td>
                    
                </tr>)
            }) : <tr></tr>
        }


    </>
  );
};

export default TablaExamenTr;
