import React from 'react'
import Titulo from '../Titulo';
import TablaEstudianteLogrosTr from './TablaEstudianteLogrosTr';

const TablaEstudiantesLogros = () => {

  return (
    <div className='ml-3 mr-3 '>
      <Titulo name={'Logros Estudiantes'}></Titulo>
      <table className="table">
        <thead className="thead-dark">
          <tr >
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad de logros</th>
            <th scope="col">Visualizar</th>
          </tr>
        </thead>
        <tbody>
          <TablaEstudianteLogrosTr></TablaEstudianteLogrosTr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaEstudiantesLogros
