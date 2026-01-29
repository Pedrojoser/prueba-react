import { useEffect, useState } from "react";
import type { Materia } from "../types/Asignaciones";
import TablaMateria from "../componentes/TablaMateria";
import Tarjeta from "../componentes/Tarjeta";


function InformacionAcademica() {
  const [materia, setMateria] = useState<Materia | null>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Pedrojoser/react-json-servicio/refs/heads/main/DatosAcademicos.json")
      .then((res) => res.json())
      .then((data) => setMateria(data))
      .catch((error) => console.error(error));
  }, []);

  if (!materia) {
    return <p>Cargando información académica...</p>;
  }
  console.log(materia);
  return (
    <div >
      <h1>Información Académica</h1>

      <TablaMateria materia={materia} />
      <br />
      <Tarjeta materia={materia} />
    </div>

  );
}

export default InformacionAcademica;
