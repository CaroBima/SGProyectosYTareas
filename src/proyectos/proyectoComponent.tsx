
import BotonGenerico from "../commons/botones/BotonGenerico";
import MenuGenerico from "../commons/menu/MenuGenerico";



export default function ProyectoComponent() {
  return (
  <>
    <BotonGenerico textoBoton = 'Prueba' ></BotonGenerico>
    <MenuGenerico opciones = {['Ver', 'Editar', 'Borrar']}></MenuGenerico>
  </>  
)};


