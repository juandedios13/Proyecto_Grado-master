import React from 'react'
import Titulo from '../Titulo';
import TablaEstudianteNotasTr from './TablaEstudianteNotasTr';

const TablaEstudiantesNotas = () => {

  return (
    <div className='ml-3 mr-3 '>
      <Titulo name={'Notas Estudiantes'}></Titulo>
      <table className="table">
        <thead className="thead-dark">
          <tr >
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Examenes Realizados</th>
            <th scope="col">Visualizar</th>
          </tr>
        </thead>
        <tbody>
          <TablaEstudianteNotasTr></TablaEstudianteNotasTr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaEstudiantesNotas
