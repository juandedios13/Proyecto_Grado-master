import React, { useEffect, useState } from 'react';
import { axiosClient } from '../../../config/axiosClient';

const TablaContenidoTr = () => {
    const [dato, setdato] = useState([]);
    
    useEffect(() => {

        let token = localStorage.getItem('token');

        

        if (token) {
          axiosClient.post('/ListarContenido').then(({data})=>{
            setdato(data.respuesta);
          });
        }
    }, []);

  return (
    <>

        {
            
            dato.length>0  ?   
            dato.map((e,index)=>{
                return (<tr key={index+1}>
                    <th className='text-dark' scope="row">{index+1}</th>
                    <td className='text-dark pl-5 text-justify' >{e.NombreContenido}</td>     
                </tr>)
            }) : <tr><th>nada</th></tr>
        }


    </>
  );
};

export default TablaContenidoTr;
