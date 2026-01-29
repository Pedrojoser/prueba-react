import type { Materia } from "../types/Asignaciones";

type Props = {
  materia: Materia;
};

function TablaMateria({ materia }: Props) {
  return (
    <table border={1}>
      <tbody>
        <tr><td>Materia</td><td>{materia.materia}</td></tr>
        <tr><td>Código</td><td>{materia.codigo}</td></tr>
        <tr><td>Docente</td><td>{materia.docente}</td></tr>
        <tr><td>Carrera</td><td>{materia.carrera}</td></tr>
        <tr><td>Créditos</td><td>{materia.creditos}</td></tr>
        <tr><td>Horas Semanales</td><td>{materia.horasSemanales}</td></tr>
        <tr><td>Modalidad</td><td>{materia.modalidad}</td></tr>
        <tr><td>Aula</td><td>{materia.aula}</td></tr>
        <tr><td>Semestre</td><td>{materia.semestre}</td></tr>
        <tr><td>Día</td><td>{materia.dia}</td></tr>
        <tr><td>Hora</td><td>{materia.horaInicio} - {materia.horaFin}</td></tr>
      </tbody>
    </table>
  );
}

export default TablaMateria;
