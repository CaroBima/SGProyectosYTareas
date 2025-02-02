import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BotonGenerico({textoBoton}:{textoBoton : string}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{textoBoton}</Button>
    </Stack>
  );
}