
import BotonGenerico from "../commons/botones/BotonGenerico";
import TablaGenerica from "../commons/tabla/TablaGenerica";
import style from "./ProyectoComponent.module.css";



export default function ProyectoComponent() {
  return (
  <>
    <div className={style.espacioBoton} >
      <BotonGenerico textoBoton = 'Añadir Proyecto'></BotonGenerico>
    </div>
    <TablaGenerica></TablaGenerica>
    
  </>  
)};


