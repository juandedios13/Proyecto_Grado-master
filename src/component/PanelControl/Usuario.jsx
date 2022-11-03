import React, { useState, useEffect } from 'react';

import {
    useParams
  } from "react-router-dom";
import { axiosClient } from '../../config/axiosClient';

const Usuario = () => {

    const {Tipo,correo} = useParams();

    const[tipo,setTipo] = useState('Docente')

    const[datos,setDatos] = useState({
        id:'',
        nombre:'',
        apellidos:'',
        correo:'',
        contrasena:'',
        tipo:tipo,
        edad:''
    })

    useEffect(() => {
        let token = localStorage.getItem('token');

        const dato = {
            datos:{
                tipo:Tipo,
                correo:correo
            }
        }
        if(token) {
          axiosClient.post('/ListarUsuario', dato).then(({data})=>{
            let edad = '';
            if(data.respuesta[0].tipoUsuario == 'estudiante' || data.respuesta[0].tipoUsuario == "Estudiante"){
                edad = data.respuesta[0].estudianteEdad;
                setTipo("Estudiante");
            }
            setDatos({
                id:data.respuesta[0].Idusuario,
                nombre:data.respuesta[0].NombreUsario,
                apellidos:data.respuesta[0].ApellidoUsuario,
                correo:data.respuesta[0].CorreoUsuario,
                contrasena:'',
                tipo:data.respuesta[0].tipoUsuario,
                edad: edad
            })
          });
        }
    }, []);


    const handleChange = (e)=>{

        setTipo(e.target.value)
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(datos.Nombre != '' && datos.Apellidos != '' && datos.Correo != ''  && datos.Contrasena != ''){
            let url = "/Update";

            if(datos.tipo == "Estudiante" || datos.tipo == "estudiante"){
                url = "/Update/Estudiante";
            }

            axiosClient.put(url, {datos}).then((e)=>{
              if(e.registro == 'true' || e.registro ){
                  alert('Registro exitoso');
              }
            }).catch(() => {
              alert('Error al actualizar')
            })

        }

    }

    const handleDatos = (e)=>{
        console.log(e.target.name);
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

  return( 

    <>
    <div>-</div>
    
    <div className="card card-primary mr-5 ml-5 mt-3 ">
  <div className="card-header">
    <h3 className="card-title">Usuario</h3>
  </div>
  {/* /.card-header */}
  {/* form start */}
  <form onSubmit={handleSubmit}>
    <div className="card-body">

            <div className="form-group text-left text-dark">
                <label htmlFor="exampleInputPassword1">Nombre</label>
                <input type="text" className="form-control" value={datos.nombre} name='nombre' placeholder="Nombre" onChange={handleDatos} />
            </div>

            <div className="form-group text-left text-dark">
                <label htmlFor="exampleInputPassword1">Apellidos</label>
                <input type="text" className="form-control" value={datos.apellidos} name='apellidos' placeholder="Apellidos" onChange={handleDatos} />
            </div>

            <div className="form-group text-left text-dark">
                <label className='' htmlFor="exampleInputEmail1">Correo electrónico</label>
                <input type="email" className="form-control" value={datos.correo} name='correo' placeholder="Correo electronico" onChange={handleDatos} />
            </div>
            <div className="form-group text-left text-dark">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control" value={datos.contrasena} name='contrasena' placeholder="Contraseña" onChange={handleDatos} />
            </div>

            
            {/* /.form-group */}
            <div className="form-group text-left text-dark">
                <label>Tipo de usuario</label>
                <select onChange={handleChange} disabled={"true"} value={tipo} name='tipo' className="form-control select2 select2-hidden-accessible" style={{ width: '100%' }} data-select2-id={9} tabIndex={-1} aria-hidden="true">
                    <option value={'Docente'} >Docente</option>
                    <option value={'Estudiante'}>Estudiante</option>
                </select>
            </div>
            {/* /.form-group */}


            {/* /.Estudiante */}
            <div className="form-group text-left text-dark" style={tipo == 'Estudiante'? {display :'block'}:{display:'none'}}>
                <label htmlFor="exampleInputPassword1">Edad</label>
                <input type="number" className="form-control" value={datos.edad} name='edad' placeholder="Edad" onChange={handleDatos} />
            </div>

            </div>
            {/* /.card-body */}
            <div className="card-footer">
            <button type="submit" className="btn btn-primary">Actualizar</button>
            </div>
        </form>
    </div>
    {/* /.card */}



    </>
  );
};

export default Usuario;
