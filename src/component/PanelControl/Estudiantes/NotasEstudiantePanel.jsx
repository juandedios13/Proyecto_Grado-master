import React, { useEffect,useState } from 'react';
import {
    useParams
  } from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';


const NotasEstudiantePanel = () => {

    const {id} = useParams();

    const [Notas,setStateNotas] = useState([]);
    


    useEffect(()=>{
        let token = localStorage.getItem('token');
        if (token) {

            const datos = {
                datos:{id:id}
            }

            axiosClient.post('/ListarNotasxEstidante',datos).then(({data})=>{
            setStateNotas(data.ress)
            
            })
    
        }
        
    },[]);  
  return (
    <>
    <div>-</div>
    <div className="card card-primary mr-5 ml-5 mt-3 ">
        <div className="card-header">{/* /.card-header */}
            <h3 className="card-title">Notas</h3>
        </div>
        {
            Notas.length > 0?
                Notas.map((item,index)=>{
                    return(
                        <div key={index+1} className='d-flex flex-wrap justify-content-around m-2'>
                            <div  className="card" style={{width: '18rem'}}>
                                <h1 class={item.NotaDetalleExamen >= 6?"display-4 text-success":"display-4 text-danger" }>{item.NotaDetalleExamen}</h1>
                                <div className="card-body">
                                    <p className="card-text text-dark">{item.NombreExamen}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            
            : <div>-</div>

        }
        
    </div>
</>
  )
}

export default NotasEstudiantePanel
