import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from "../component/Login/Login";
import  {Prueba}  from "../component/PanelControl/prueba";
import { Index } from "../component/PanelControl";
import { Page404 } from "../component/404/Page404";
import Validar from "../component/Validar";
import TablaEstudiantes from "../component/PanelControl/Estudiantes/TablaEstudiantes";
import TablaDocente from "../component/PanelControl/Docentes/TablaDocente";
import Registro from "../component/PanelControl/Registro";
import Usuario from "../component/PanelControl/Usuario";
import Context from "../component/Estudiantes/Context";
import TablaContenido from "../component/PanelControl/Docentes/TablaContenido";
import TablaExamen from "../component/PanelControl/Docentes/TablaExamen";
import TablaPreguntasExamen from "../component/PanelControl/Docentes/TablaPreguntasExamen";
import { UserContext } from "../contexts/UserContext";
import ActualizarPreguntas from "../component/PanelControl/Docentes/ActualizarPreguntas";
import Tablero from "../component/Estudiantes/Tablero";
import Temas from "../component/Estudiantes/Temas";
import HacerExamen from "../component/Estudiantes/HacerExamen/HacerExamen";
import PreguntasExamenEstudiante from "../component/Estudiantes/Examen/Examen";
import ListasDePreguntas from "../component/Estudiantes/Examen/ListasDePreguntas";
import LogrosEstudiante from "../component/Estudiantes/Logros/LogrosEstudiante";
import VerNota from "../component/Estudiantes/Examen/VerNota";
import Calificaciones from "../component/Estudiantes/Calificaciones";

const AppRouter = () => {


  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Validar />}></Route>
            <Route path="/prueba" element={<Prueba />}></Route>
            <Route path="/Panel/*" element={<Validar />}>
                <Route path="estudiante" element={<TablaEstudiantes></TablaEstudiantes> }></Route>
                <Route path="docente" element={<TablaDocente></TablaDocente> }></Route>
                <Route path="contenido" element={<TablaContenido></TablaContenido> }></Route>
                <Route path="registro" element={<Registro></Registro> }></Route>
                <Route path="Examenes" element={<TablaExamen></TablaExamen> }></Route>
                <Route path="Preguntas/:id" element={<TablaPreguntasExamen></TablaPreguntasExamen> }></Route>
                <Route path="PreguntaRespuesta/:id" element={<ActualizarPreguntas></ActualizarPreguntas> }></Route>                
                <Route path="Usuario/tipo/:Tipo/:correo" element={<Usuario></Usuario> }></Route>
            </Route>
            <Route path="/Estudiantes/*" element={<Validar />}>
                <Route path="temas/:id" element={<Temas />}></Route>
                <Route path="temas/:idContenido/tablero/:idSubContenido" element={<Tablero></Tablero>} ></Route>
                <Route path="HacerExamen/:id" element={<HacerExamen />}></Route>
                <Route path="Examen/:id" element={<ListasDePreguntas />}></Route>
                <Route path="Examen/:id/Pregunta/:idPregunta" element={<PreguntasExamenEstudiante />}></Route>
                <Route path="VerNota/:id/:nota" element={<VerNota />}></Route>
                
                <Route path="Logros" element={<LogrosEstudiante />}></Route>
                <Route path="Calificaciones" element={<Calificaciones />}></Route>
                <Route path=""  element={<Context />} > 
            </Route>
        </Route>
        
        <Route path="*" element={<Page404 />} ></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter