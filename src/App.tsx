import "./App.css";
import RegistroInscripcion from "./vistas/RegistroInscripcion";
import InformacionAcademica from "./vistas/InformacionAcademica";

function App() {
  return (
     <>
      <div className="vista-manual">
        <RegistroInscripcion />
      </div>

      <div className="vista-academica">
        <InformacionAcademica />
      </div>
    </>
  );
}

export default App;


