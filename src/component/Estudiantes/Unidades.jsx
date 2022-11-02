import React from 'react';
import PropTypes from 'prop-types';



const Unidades = (props) => {

  const datos = props.datos;
  const handleclick = props.click;
  return (
      <>
          {
            datos.map((e)=>{
                return (
                    <div key={e.unidad} className="unidad">
                        <img className='unidadimg' src={`../../assets/${e.img}`} onClick={() => handleclick(e.unidad)} alt= "No se ve" />
                        <input type="button" defaultValue={e.name} onClick={ ()=> handleclick(e.unidad)} />
                    </div>
                )
            })
          }
      </>

  );
};

Unidades.propTypes = {
    datos: PropTypes.object,
    handleclick : PropTypes.func
};

export default Unidades;
