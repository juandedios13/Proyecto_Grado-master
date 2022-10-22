import React from 'react';
import {
  useNavigate
} from "react-router-dom";
import Unidades from './Unidades';
import '../../style/estilos2.css';
import Header from '../PanelControl/Header';

const Context = () => {

    let navigate = useNavigate();

    const handleclick = (n) =>{
      navigate(`temas/${n}`);
    }  

    const dato1 = [ 
         {
            unidad:'1',
            name: "1.Conjuntos",
            img:"img/planeta1.png",
            url:""
        },
        {
            unidad:'2',
            name: "2.Numeros Naturales",
            img:"img/planeta2.png",
            url:""
        },
        {
            unidad:'3',
            name: "3.Teorias de números",
            img:"img/planeta3.png",
            url:""
        },
        {
            unidad:'4',
            name: "4.Geometría",
            img:"img/planeta4.png",
            url:""
        }
    ]
    const dato2 = [
        {
            unidad:'5',
            name: "5.Fraccionarios",
            img:"img/planeta5.png",
            url:""
        },
        {
            unidad:'6',
            name: "6.Decimales",
            img:"img/planeta2.png",
            url:""
        },
        {
            unidad:'7',
            name: "7.Razones y proporciones",
            img:"img/planeta7.png",
            url:""
        },
        {
            unidad:'8',
            name: "8.Estadística",
            img:"img/planeta8.png",
            url:""
        }

    ]

  

  return (
    
      <div className='ContainerUnidades'>
          <div className='contenedorUnidades'>
              <div className='primeraileraUnidades'>
                  <Unidades datos={dato1}  click={handleclick} />
              </div>
              <div className='segundaileraUnidades'>
                  <Unidades datos={dato2} click={handleclick}/>
              </div>
              
          </div>
      </div> 
  );
};

export default Context;
