import React from 'react';
import {
  useNavigate,
  Outlet
} from "react-router-dom";
import Unidades from './Unidades';
import '../../style/estilos2.css';
import Header from '../PanelControl/Header';

const ContextEstudiante = () => {

  let navigate = useNavigate();
  let token = localStorage.getItem('token');
  let tokenn = JSON.parse(token);

  const handleclick = ()=>{
      localStorage.removeItem('token');
      navigate(`/`);
  }

  const handleclickUnidades = ()=>{
    navigate(`/Estudiantes`);
  }

  const handleclickLogros = ()=>{
    navigate(`/Estudiantes/Logros`);
  }

//<Header></Header>  
  return (
    <>
      <div className="page-header bg-light d-flex justify-content-between pt-2 pb-2">
        <p className="ml-4">
            {tokenn.nombre} {tokenn.apellido}
        </p>
        <p onClick={handleclickUnidades}>
          Unidades
        </p>
        <p onClick={handleclickLogros}>
          Logros
        </p>
        <button type="button" onClick={handleclick} className="btn btn-primary mr-4">Salir</button>
      </div>
      <Outlet>
              
      </Outlet> 
    </>
  );
};

export default ContextEstudiante;
