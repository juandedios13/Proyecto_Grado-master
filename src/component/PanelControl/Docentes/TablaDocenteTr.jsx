import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';

const TablaDocenteTr = () => {

    
    const [dato, setdato] = useState([]);
    
    useEffect(() => {

        let token = localStorage.getItem('token');

        const datos = {
            datos:{tipo:"docente"}
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

            axiosClient.post('/Listar', datos).then(({data})=>{
                //console.log(e.respuesta);
              setdato(data.respuesta);
            });
        }else{
            
        }
      return () => {
      };
    }, []);

  return (
    <>

        {
            
            dato.length>0 ?   

            dato.map((e,index)=>{
                return (<tr key={index+1}>
                    <th className='text-dark' scope="row">{index+1}</th>
                    <td className='text-dark' >{e.NombreUsario}</td>
                    <td className='text-dark' >{e.ApellidoUsuario}</td>
                    <td> <Link to={`/Panel/Usuario/tipo/${e.tipoUsuario}/${e.CorreoUsuario}`} className='nav-link'><i className='nav-icon fas fa-edit'>Editar</i> </Link> </td>
                    <td> <a className='nav-link'><i className='nav-icon fas fa-edit'>Eliminar</i> </a> </td>
                    
                </tr>)
            }) : <tr></tr>
        }


    </>
  );
};

export default TablaDocenteTr;
