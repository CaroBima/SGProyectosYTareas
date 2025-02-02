import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Titulo.module.css';

export default function Titulo() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className={styles.texto}>
        <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" color="inherit" component="div">
            Sistema de Gestión de Proyectos y Tareas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}