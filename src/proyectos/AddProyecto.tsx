import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import style from "./Proyectos.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import BotonGenerico from "../commons/botones/BotonGenerico";

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

export default function AddProyecto() {
  return (
    <>
      <Paper className={style.espacioForm}>
        <Grid container spacing={2}>
          <Grid size={8}>
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
                  <DatePicker label="Fecha de Vencimiento"/>
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
              <Box
               component="form"
               sx={{ "& .MuiTextField-root": { m: 1, width: "90%" } }}
               noValidate
               autoComplete="off">
                <BotonGenerico textoBoton={"Añadir tarea"}></BotonGenerico>
              </Box>
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
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
