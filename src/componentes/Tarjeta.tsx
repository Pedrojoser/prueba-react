import type { Materia } from "../types/Asignaciones";

type Props = {
  materia: Materia;
};

function Tarjeta({ materia }: Props) {
  return (
    <div className="tarjeta">
      <h3>{materia.materia}</h3>
      <p><strong>Código:</strong> {materia.codigo}</p>
      <p><strong>Docente:</strong> {materia.docente}</p>
      <p><strong>Carrera:</strong> {materia.carrera}</p>
      <p><strong>Créditos:</strong> {materia.creditos}</p>
      <p><strong>Horas Semanales:</strong> {materia.horasSemanales}</p>
      <p><strong>Aula:</strong> {materia.aula}</p>
      <p><strong>Semestre:</strong> {materia.semestre}</p>
      <p><strong>Día:</strong> {materia.dia}</p>
      <p><strong>Hora:</strong> {materia.horaInicio}-{materia.horaFin}</p>
    </div>
  );
}

export default Tarjeta;
