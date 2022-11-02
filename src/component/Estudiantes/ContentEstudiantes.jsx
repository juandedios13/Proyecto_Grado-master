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

  const handleclickCalificaciones = ()=>{
    navigate(`/Estudiantes/Calificaciones`);
  }

//<Header></Header>  
  return (
    <>
      <nav className="navbar navbar-dark bg-dark justify-content d-flex align-items-center">
        <button className="border border-white btn btn-primary mr-4 nav-item">
            {tokenn.nombre} {tokenn.apellido}
        </button>
        <button className='border border-white btn btn-dark nav-item' onClick={handleclickUnidades}>
          Unidades
        </button>
        <button className='border border-white btn btn-dark nav-item' onClick={handleclickLogros}>
          Logros
        </button>
        <button className='border border-white btn btn-dark nav-item' onClick={handleclickCalificaciones}>
          Calificaciones
        </button>
        <button type="button" onClick={handleclick} className="border border-white btn btn-primary mr-4">Salir</button>
      </nav>
      <Outlet>
              
      </Outlet> 
    </>
  );
};

export default ContextEstudiante;
