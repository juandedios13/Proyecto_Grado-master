import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Page404 } from './404/Page404';
import ContextEstudiante from './Estudiantes/ContentEstudiantes';
import Context from './Estudiantes/Context';
import Login from './Login/Login';
import { Index } from './PanelControl';

   


const Validar = (props)=>{
        
    let navigate = useNavigate();
    let token = localStorage.getItem('token');
    let tokenn = JSON.parse(token);
    if(tokenn !== undefined && tokenn !== null ){
        let fechaActual = new Date();
        let fecha = new Date(tokenn.fecha);
        let dia = fecha.getDate() , mes = fecha.getMonth();
        if(dia == fechaActual.getDate() && mes == fechaActual.getMonth()){
            if(tokenn.tipo == "Admin" || tokenn.tipo == "admin" || tokenn.tipo == "Docente" || tokenn.tipo == "docente" ){
              let url = window.location.href;
              let urltemp = url;
              if(!url.includes("Panel") && url != (urltemp+"Panel/") ){
                console.log(window.location.href);
                window.location.href = url+"Panel";
              }
              return(
                  <Index tipo={tokenn.tipo}></Index>
              )
            }else if(tokenn.tipo == "Estudiante" || tokenn.tipo == "estudiante"){
              let url = window.location.href;
              let urltemp = url;
              if(!url.includes("Estudiantes") && url != (urltemp+"Estudiantes/") ){
                console.log(window.location.href);
                window.location.href = url+"Estudiantes";
                navigate(`/Estudiantes`);
              }
              
                return(
                    <ContextEstudiante></ContextEstudiante>
                )
            }else{
                return(
                    <Page404></Page404>
                )
            }
        }else{
          localStorage.removeItem('token')
          return(
            <Login></Login>
          ) 
        }
        
    }else{
        
        return(
            <Login></Login>
        )
    }
}
   
export default Validar;