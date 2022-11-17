import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';

const TablaEstudianteTrazabilidadTr = () => {

    
    const [dato, setdato] = useState([]);
    
    useEffect(() => {

        let token = localStorage.getItem('token');

        if(token){
          axiosClient.post('/ListarCantidadTrazabilidadXEstudiante').then(({data})=>{
            //console.log(e.respuesta);
            setdato(data.ress);
          });
        }
    }, []);
    
    let n = 0;

  return (
    <>

        {
            
            dato.length>0 ?   

            dato.map((e,index)=>{
                return (
                  <tr key={index+1}>
                    <th className='text-dark' scope="row">{index+1}</th>
                    <td className='text-dark' >{e.NombreUsario + ' ' + e.ApellidoUsuario}</td>
                    <td className='text-dark'>{e.NTrazabilidad} / 100</td>
                </tr>)
            }) : <tr></tr>
        }


    </>
  );
};

export default TablaEstudianteTrazabilidadTr;
