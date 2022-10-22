import React from 'react'

const InputPreguntasExamenEstudiante = (props) => {

  let RespuestasSeleccionadas = localStorage.getItem('RespuestasSeleccionadas')
  let checkedaux = false
  if(RespuestasSeleccionadas != null){
    RespuestasSeleccionadas = JSON.parse(RespuestasSeleccionadas)
    console.log(RespuestasSeleccionadas)
    console.log(props)
    if(RespuestasSeleccionadas.some(aux => aux.iIdrespuestasExamen ==  props.id)){
        console.log("Cambio")
        checkedaux = true
      }else{

      }

  }

  //const name =  + props.n;
  const namecheckbox = "checkbox" + props.n;

  return (
    <>
          <div key={props.n} className="form-group text-left text-dark">
                <label htmlFor="exampleInputPassword1">{props.tipo}</label>
                <textarea  name={props.name} id={props.id} readOnly={true}  posicion={props.posicion}  className="form-control" sid={'exampleFormControlTextarea'+props.id} rows={3} defaultValue={props.text != ""?props.text:""} onChange={props.onChange}  />
                
                
              {  
                  props.tipo !=  'Pregunta' ? 
                    <div className="form-check form-switch">
                      <input className="form-check-input"  posicion={props.posicion} type="checkbox" id={'check'+props.id} defaultChecked={checkedaux?true:false} name={props.namecheck} onChange={props.onChange} />
                      <label className="form-check-label" htmlFor={props.namecheck}>Verdadera o Falsa</label>
                    </div> 
                  : <></> 
              }

               

          </div>
    </>
  )
}

export default InputPreguntasExamenEstudiante