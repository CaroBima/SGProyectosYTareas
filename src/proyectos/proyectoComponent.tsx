
import BotonGenerico from "../commons/botones/BotonGenerico";
import TablaGenerica from "../commons/tabla/TablaGenerica";
import style from "./ProyectoComponent.module.css";

type RowData = {
  [key: string]: string | number;
};


export default function ProyectoComponent() {

  const columnas : string[] = ["Id", "Nombre Proyecto", "Fecha Vencimiento", "Asignado"];
  const filas : RowData[] = [
  { id: 1, nombre: "Tarea 1", fechaVenc: "12-02-2025", asignado: "Carolina Bima" },
  { id: 2, nombre: "Tarea 2", fechaVenc: "19-05-2025", asignado: "-" },
  { id: 3, nombre: "Crear base de datos", fechaVenc: "23-05-2025", asignado: "Pedro Páramo" },
  { id: 4, nombre: "Cambiar puertos", fechaVenc: "19-02-2025", asignado: "Maira Milena" },
];

const columnMap: { [key: string]: string } = {
  "Id": "id",
  "Nombre Proyecto": "nombre",
  "Fecha Vencimiento": "fechaVenc",
  "Asignado": "asignado"
};
  return (
  <>
    <div className={style.espacioBoton} >
      <BotonGenerico textoBoton = 'Añadir Proyecto'></BotonGenerico>
    </div>
    <TablaGenerica columns={columnas} rows={filas} columnMap={columnMap}></TablaGenerica>
    
  </>  
)};


