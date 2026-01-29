import type { Registro } from "../types/Registro";

type TablaProps = {
  registros: Registro[];
  onEliminarRegistro: (indice: number) => void;
};

function Tabla({ registros, onEliminarRegistro }: TablaProps) {
  
  return (
    <div>

      <h2>Listado de Estudiantes</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Correo Electronico</th>
            <th>Edad</th>
            <th>Numero de Teléfono</th>
            <th>Documento de identidad</th>
            <th>Género</th>
            <th>Carrera Universitaria</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td>{registro.nombre}</td>
              <td>{registro.correo}</td>
              <td>{registro.edad}</td>
              <td>{registro.telefono}</td>
              <td>{registro.documento}</td>
              <td>{registro.genero}</td>
              <td>{registro.carrera}</td>
              <td>
                <button onClick={() => onEliminarRegistro(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
