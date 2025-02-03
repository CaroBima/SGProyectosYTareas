
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Titulo from './commons/titulo/Titulo'
import ProyectosContainer from './proyectos/ProyectosContainer'


function App() {
  return (
    <Router>
      <Principal />
    </Router>
  )
}

function Principal() {
  const location = useLocation();
  const hideHeaderOnRoutes = ["/login"]; 

  return (
    <>
      {!hideHeaderOnRoutes.includes(location.pathname) && <Titulo />}
      <Routes>
        <Route path="/" element={<ProyectosContainer />} />
      </Routes>
    </>
  );
}
export default App
