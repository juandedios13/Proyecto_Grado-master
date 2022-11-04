import React from 'react'
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


const LogrosEstudiante = () => {
  return (
    <>
    <div>-</div>
    
    <div className="card card-primary mr-5 ml-5 mt-3 ">
        <div className="card-header">{/* /.card-header */}
            <h3 className="card-title">Logros</h3>
        </div>
        <div className='d-flex flex-wrap justify-content-around m-2'>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image1} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image2}  alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image3} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image4} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image5} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image6} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image7} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image9} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image10} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image11} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image12} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image13} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image14} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image15} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Logro</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
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

export default LogrosEstudiante
