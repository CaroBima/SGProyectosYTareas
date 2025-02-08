
import Paper from "@mui/material/Paper/Paper";
import BotonGenerico from "../commons/botones/BotonGenerico";
import TablaGenerica from "../commons/tabla/TablaGenerica";

type RowData = {
  [key: string]: string | number;
};

export default function ProyectosContainer() {
  const columnas : string[] = ["Id", "Nombre Proyecto", "Fecha Vencimiento", "Asignado"];
  const filas : RowData[] = [ //contenido de la tabla hardcodeado para pruebas
  { id: 1, nombre: "Tarea 1", fechaVenc: "12-02-2025", asignado: "Carolina Orgaz" },
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
    
    <BotonGenerico textoBoton = 'Añadir Proyecto'></BotonGenerico>
    
    <Paper variant= "elevation" square={false}>
      <TablaGenerica columns={columnas} rows={filas} columnMap={columnMap}></TablaGenerica>
    </Paper>
  </>  
)};


