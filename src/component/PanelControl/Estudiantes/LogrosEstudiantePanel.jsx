import React, { useEffect,useState } from 'react';
import {
    useParams
  } from "react-router-dom";
import { axiosClient } from '../../../config/axiosClient';
import image1 from '../../../style/img/logros/1.PNG';
import image2 from '../../../style/img/logros/1.1.PNG';
import image3 from '../../../style/img/logros/2.PNG';
import image4 from '../../../style/img/logros/2.2.PNG';
import image5 from '../../../style/img/logros/3.PNG';
import image6 from '../../../style/img/logros/3.3.PNG';
import image7 from '../../../style/img/logros/4.PNG';
import image8 from '../../../style/img/logros/4.4.PNG';
import image9 from '../../../style/img/logros/5.PNG';
import image10 from '../../../style/img/logros/5.5.PNG';
import image11 from '../../../style/img/logros/6.PNG';
import image12 from '../../../style/img/logros/6.6.PNG';
import image13 from '../../../style/img/logros/7.PNG';
import image14 from '../../../style/img/logros/7.7.PNG';
import image15 from '../../../style/img/logros/8.PNG';
import image16 from '../../../style/img/logros/8.8.PNG';


const LogrosEstudiantePanel = () => {

    const {id} = useParams();

    const [IdLogrosUsuaruio,setStateIdLogros] = useState([]);
    const [State1,setState1] = useState(false);
    const [State2,setState2] = useState(false);
    const [State3,setState3] = useState(false);
    const [State4,setState4] = useState(false);
    const [State5,setState5] = useState(false);
    const [State6,setState6] = useState(false);
    const [State7,setState7] = useState(false);
    const [State8,setState8] = useState(false);
    const [State9,setState9] = useState(false);
    const [State10,setState10] = useState(false);
    const [State11,setState11] = useState(false);
    const [State12,setState12] = useState(false);
    const [State13,setState13] = useState(false);
    const [State14,setState14] = useState(false);
    const [State15,setState15] = useState(false);
    const [State16,setState16] = useState(false);


    useEffect(()=>{
        if(id != 0){
            let token = localStorage.getItem('token');
            if (token) {

                const datos = {
                    datos:{id:id}
                }

                axiosClient.post('/ListarLogrosDocente',datos).then(({data})=>{
                setStateIdLogros(data.ress)
                
                })
        
            }
        }else{
            setState1(true)
            setState2(true)
            setState3(true)
            setState5(true)
            setState6(true)
            setState7(true)
            setState8(true)
            setState9(true)
            setState10(true)
            setState11(true)
            setState12(true)
            setState13(true)
            setState14(true)
            setState15(true)
            setState16(true)
        }
        
    },[]);  

    useEffect(()=>{
        if(IdLogrosUsuaruio.length > 0){
            for(let i = 0; i < IdLogrosUsuaruio.length; i++){
                if(IdLogrosUsuaruio[i].IdLogros == 4){
                    setState1(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 5){
                    setState2(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 6){
                    setState3(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 7){
                    setState4(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 8){
                    setState5(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 9){
                    setState6(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 10){
                    setState7(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 11){
                    setState8(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 12){
                    setState9(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 13){
                    setState10(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 14){
                    setState11(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 15){
                    setState12(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 16){
                    setState13(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 17){
                    setState14(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 18){
                    setState15(true)
                }else if(IdLogrosUsuaruio[i].IdLogros == 19){
                    setState16(true)
                }
            }
        }
       
    },[IdLogrosUsuaruio]); 

  return (
    <>
    <div>-</div>
    
    <div className="card card-primary mr-5 ml-5 mt-3 ">
        <div className="card-header">{/* /.card-header */}
            <h3 className="card-title">Logros</h3>
        </div>
        <div className='d-flex flex-wrap justify-content-around m-2'>
            <div hidden={State1? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image1} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>

            <div hidden={State2? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image2}  alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>

            <div hidden={State3? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image3} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>

            <div hidden={State4? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image4} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>

            <div hidden={State5? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image5} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State6? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image6} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State7? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image7} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State8? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image8} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State9? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image9} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State10? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image10} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State11? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image11} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State12? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image12} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State13? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image13} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State14? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image14} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State15? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image15} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div hidden={State16? false:true} className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image16} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
        </div>
        
        {/* <ul className="list-group list-group-flush">
            {
                dato.map((e,index)=>{
                    return (
                        <li key={index+1} className="list-group-item flex"> 
                            <p class="card-text text-dark">{e.PreguntaExamen}</p>
                            <button type="button" class="btn btn-primary"> Resolver</button>
                        </li>
                    )   
                })
            }
            <li className="list-group-item d-flex justify-content-around"> 
                <h4 class="card-text text-dark ">Preguntas  0/{dato.length} </h4>
                <button type="button" class="btn btn-success ">Enviar</button>
            </li>
        </ul> */}
    </div>{/* /.card */}
</>
  )
}

export default LogrosEstudiantePanel
