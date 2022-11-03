import React, { useEffect, useState } from 'react';
import { axiosClient } from '../../../config/axiosClient';

const TablaEstudianteLogrosTr = () => {

    
    const [dato, setdato] = useState([]);
    
    useEffect(() => {

        let token = localStorage.getItem('token');

        const datos = {
            datos:{tipo:"estudiante"}
        }

        if(token){
          axiosClient.post('/Listar', datos).then(({data})=>{
            //console.log(e.respuesta);
            setdato(data.respuesta);
          });
        }
    }, []);
    
    let n = 0;

  return (
    <>

        {
            
            dato.length>0 ?   

            dato.map((e,index)=>{
                return (<tr key={index+1}>
                    <th className='text-dark' scope="row">{index+1}</th>
                    <td className='text-dark' >{e.NombreUsario}</td>
                    <td className='text-dark'>{e.ApellidoUsuario}</td>
                    <td className='text-dark'>{e.estudianteEdad}</td>
                </tr>)
            }) : <di></di>
        }


    </>
  );
};

export default TablaEstudianteLogrosTr;
