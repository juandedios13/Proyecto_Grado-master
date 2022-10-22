import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { axiosClient } from '../../config/axiosClient';

const FormsLogin = () => {

    let navigate = useNavigate();


    const handleSubmit = (e)=>e.preventDefault();

    const [datos, setdatos] = useState({
        correo:"",
        password:""
    });
    
    const handleDatos= (e)=>{
        setdatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    const handleEnvio = (e)=>{
        if(datos.user!="" && datos.password!=""){
            envio();
        }
    }

    const envio = ()=>{
        axiosClient.post('/login', {datos}).then(({data: e})=>{
          
            e.fecha = new Date();
            e.recargar = false;
            localStorage.setItem('token',JSON.stringify(e));
            if(e.tipo == "docente" || e.tipo == "Docente" ||  e.tipo == "Admin" ||  e.tipo == "admin"){
                enviar('Panel')
            }else if(e.tipo){
                enviar('Estudiantes')
            }
        });
    }


    const enviar = (url)=>{
        navigate(`/${url}`);
    }

    return (
        <div>
           <form className="login" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="correo" onChange={handleDatos} />
				<input type="password" placeholder="password" name="password" onChange={handleDatos} />
				<input type="submit"  value="Login" onClick={handleEnvio} />
           </form> 
        </div>
    )
}

export default FormsLogin
