import React from 'react'
import Titulo from '../Titulo';
import TablaEstudianteTrazabilidadsTr from './TablaEstudianteTrazabilidadTr';

const TablaEstudiantesTrazabilidad = () => {

  return (
    <div className='ml-3 mr-3 '>
      <Titulo name={'Logros Estudiantes'}></Titulo>
      <table className="table">
        <thead className="thead-dark">
          <tr >
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Trazabilidad</th>
          </tr>
        </thead>
        <tbody>
          <TablaEstudianteTrazabilidadsTr></TablaEstudianteTrazabilidadsTr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaEstudiantesTrazabilidad
