import React from 'react'

const Litemas = (props) => {

  const datos = props.datos;
  const handleclick = props.click;
  return(
  <>
  
    {
      datos.map((e)=>{
        return (
          <li onClick={ ()=> handleclick(e.idSubContenidoDetalle)} ><a href=''>{e.NombreTema}</a></li>
        )
      })
    }
  
  </>)
  
  
}

export default Litemas