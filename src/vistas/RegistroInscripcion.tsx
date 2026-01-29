import { useState } from "react";
import Formulario from "../componentes/Formulario";
import Tabla from "../componentes/Tabla";
import type { Registro } from "../types/Registro";


function RegistroInscripcion() {
  const [registros, setRegistros] = useState<Registro[]>([]);

  const agregarRegistro = (registro: Registro) => {
    setRegistros([...registros, registro]);
  };

  const eliminarRegistro = (indice: number) => {
    const nuevosRegistros = registros.filter((_, i) => i !== indice);
    setRegistros(nuevosRegistros);
  };

  return (
    <div>
      <h2>Registro Manual de Estudiantes</h2>

      <Formulario onAgregarRegistro={agregarRegistro} />

      <Tabla
        registros={registros}
        onEliminarRegistro={eliminarRegistro}
      />
    </div>
  );
}

export default RegistroInscripcion;
