import { useState } from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import BotonGenerico from "../commons/botones/BotonGenerico";
import style from "./Proyectos.module.css";
import TablaGenerica from "../commons/tabla/TablaGenerica";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

type RowData = {
  [key: string]: string | number;
};

export default function AddProyecto() {
  const [usuario, setUsuario] = useState('');

  const columnas : string[] = ["Id", "Nombre Tarea", "Asignado"];
  const filas : RowData[] = [ //contenido de la tabla hardcodeado para pruebas
  { id: 1, nombre: "Tarea 1",  asignado: "Carolina Orgaz" },
  { id: 2, nombre: "Tarea 2",  asignado: "-" },
  { id: 3, nombre: "Crear base de datos",  asignado: "Pedro Páramo" },
  { id: 4, nombre: "Cambiar puertos", asignado: "Maira Milena" },
];

const columnMap: { [key: string]: string } = { 
  "Id": "id",
  "Nombre Tarea": "nombre",
  "Asignado": "asignado"
};

  const handleChange = (event: SelectChangeEvent) => {
    setUsuario(event.target.value as string);
  };
  return (
    <>
      <Paper className={style.espacioForm}>
        <Grid container spacing={2} >
          <Grid size={8} className={style.containers}>
            <Item>
              <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "44%" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de Proyecto"
                  defaultValue=""
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Fecha de Vencimiento" />
                </LocalizationProvider>
              </Box>
              <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "90%" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-static"
                  label="Descripción"
                  multiline
                  rows={5}
                  defaultValue=""
                />
              </Box>
             
            </Item>
          </Grid>
          <Grid size={3} className={style.containers}>
            <Item>
              <FormControl fullWidth>
                <InputLabel id="selectAsignacion">Asignación</InputLabel>
                <Select
                  labelId="selectAsignacion"
                  id="selectAsignacion"
                  value={usuario}
                  label="Usuario"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Carolina</MenuItem>
                  <MenuItem value={20}>Pedro</MenuItem>
                  <MenuItem value={30}>José</MenuItem>
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid size={12} className={style.containers}>
            <Item>
            <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "90%" } }}
                noValidate
                autoComplete="off"
              >
                <TablaGenerica columns={columnas} rows={filas} columnMap={columnMap}></TablaGenerica>
                <BotonGenerico textoBoton={"Añadir tarea"}></BotonGenerico>
              </Box>
            </Item>
          </Grid>
          <Grid size={12}>
            <BotonGenerico textoBoton={"Cancelar"}></BotonGenerico>
            <BotonGenerico textoBoton={"Guardar"}></BotonGenerico>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
