import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import style from "./BotonGenerico.module.css";
import Paper from '@mui/material/Paper/Paper';


export default function BotonGenerico({textoBoton}:{textoBoton : string}) {
  return (
    <Stack spacing={2} direction="row" className={style.espacioBoton} >
      <Paper variant= "elevation" square={false} >
        <Button variant="contained" >{textoBoton}</Button>
      </Paper>
    </Stack>
  );
}