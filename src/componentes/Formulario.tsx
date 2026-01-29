import { useState } from "react";
import type { SubmitEvent } from "react";
import type { Registro } from "../types/Registro";

type FormularioProps = {
    onAgregarRegistro: (registro: Registro) => void;
};

function Formulario({ onAgregarRegistro }: FormularioProps){

    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        correo: "",
        edad: "",
        telefono: "",
        documento: "",
        genero: "",
        carrera: ""
    });

    const [error, setError] = useState("");

    const manejarCambio = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setDatosFormulario({
            ...datosFormulario,
            [name]: value,
        });
    };
   
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const soloNumeros = /^[0-9]+$/;
    const generosValidos = ["Masculino", "Femenino", "masculino","femenino", "Otro", "otro"];
    /* Manejo del submit  */
    const manejarSubmit=(e: SubmitEvent)=>{
        e.preventDefault();

        if (
            !datosFormulario.nombre
            || !datosFormulario.correo
            || !datosFormulario.edad
            || !datosFormulario.telefono
            || !datosFormulario.documento
            || !datosFormulario.genero
        ){
            setError("Se encuentran campos vacios")
            return
        }

        if (datosFormulario.nombre.length < 3){
            setError("El nombre debe tener al menos 3 caracteres");
            return;
        }

        if (!soloLetras.test(datosFormulario.nombre)){
            setError("El nombre solo debe contener letras y espacios");
            return;
        }

        if (Number(datosFormulario.edad) < 15 || Number(datosFormulario.edad) > 100){
            setError("La edad debe estar entre 15 y 100 años");
            return;
        }

        if(datosFormulario.telefono.length < 7 || datosFormulario.telefono.length > 15){
            setError("El número de teléfono debe tener entre 7 y 15 dígitos");
            return;
        }
        
        if (!soloNumeros.test(datosFormulario.documento)){
            setError("El número de documento solo debe contener números");
            return;
        }
        if(datosFormulario.documento.length < 7 || datosFormulario.documento.length > 20){
            setError("El documento debe tener entre 7 y 20 caracteres");
            return;
        }
                
        if (!generosValidos.includes(datosFormulario.genero)){
            setError("El género debe ser 'Masculino', 'Femenino' o 'Otro'");
            return;
        }

        if (datosFormulario.carrera === ""){
            setError("Debe seleccionar una carrera");
            return;
        }

        setError("");


        onAgregarRegistro({
            nombre: datosFormulario.nombre,
            correo: datosFormulario.correo,
            edad: Number(datosFormulario.edad),
            telefono: datosFormulario.telefono,
            documento: datosFormulario.documento,
            genero: datosFormulario.genero,
            carrera: datosFormulario.carrera,
        });

        setDatosFormulario({
            nombre: "",
            correo: "",
            edad: "",
            telefono: "",
            documento: "",
            genero: "",
            carrera: ""
        });
    };


    return(
        <form onSubmit={manejarSubmit}>
            <h2>Formulario de Registro</h2>
            
            <div>
                <label >Nombre Completo</label>
                <input 
                type="text"
                name="nombre"
                value={datosFormulario.nombre}
                onChange={manejarCambio}
                 /> 
            </div>
            <div>
                <label >Correo Electronico</label>
                <input
                type="email"
                name="correo"
                value={datosFormulario.correo}
                onChange={manejarCambio}
                 />
            </div>
            <div>
                <label >Edad</label>
                <input
                type="number"
                name="edad"
                value={datosFormulario.edad}
                onChange={manejarCambio}
                 />
            </div>
            <div>
                <label >Numero de Teléfono</label>
                <input
                type="tel"
                name="telefono"
                value={datosFormulario.telefono}
                onChange={manejarCambio}
                 />
            </div>
            <div>
                <label >Documento de Identidad</label>
                <input
                type="text"
                name="documento"
                value={datosFormulario.documento}
                onChange={manejarCambio}
                 />
            </div>
            <div>
                <label >Género:</label>
                <input
                type="text"
                name="genero"
                value={datosFormulario.genero}
                onChange={manejarCambio}
                 />
            </div>
            <div>
                <label >Carrera Universitaria</label>
                    <select
                    name="carrera"
                    value={datosFormulario.carrera}
                    onChange={manejarCambio}>
                        <option value="">Seleccionar carrera</option>
                        <option value="ingenieria de Sistemas">Ingeniería de Sistemas</option>
                        <option value="ingenieria Civil">Ingeniería Civil</option>
                        <option value="ingenieria de Industrial">Ingeniería de Industrial</option>
                        <option value="ingenieria Electronica">Ingeniería Electrónica</option>
                        <option value="medicina">Medicina</option>
                        <option value="derecho">Derecho</option>
                        <option value="administracion de Empresas">Administración de Empresas</option>
                        <option value="Contaduria Publica">Contaduría Pública</option>
                        <option value="Psicologia">Psicología</option>
                        <option value="Arquitectura">Arquitectura</option>
                    </select>
            </div>

            <button type="submit">Enviar</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        
        </form>
    );
}
export default Formulario;