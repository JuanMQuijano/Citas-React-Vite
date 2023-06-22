//Importando los hooks y los componentes que vamos a usar
import { useEffect, useState } from "react"
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente }) {

    //Establacemos las variables con sus hooks por defecto
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    const [editando, setEditando] = useState(false)

    //Al momento en el que haya un cambio en la variable de paciente
    useEffect(() => {
        //Validamos si el objeto de paciente tiene keys y si es así, llenamos las variables y cambiamos el estado de editando a true
        if (Object.keys(paciente).length > 0) {

            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)

            setEditando(true)
        }
    }, [paciente])

    //Función para generar un ID unico para cada objeto
    const generarId = () => {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    //Al momento de enviar el formulario
    const handleSubmit = (e) => {
        //Prevenimos la actualización
        e.preventDefault();

        //Validamos los campos
        if ([nombre, propietario, email, alta, sintomas].includes("")) {
            return setError(true);
        }

        //Si pasa la validación error pasa a false
        setError(false);

        //Creamos un nuevo paciente
        const nuevoPaciente = {
            nombre, propietario, email, alta, sintomas
        }

        //Validamos si el objeto de paciente tiene un id, para editar
        if (paciente.id) {
            //Le agregamos el id del paciente al nuevoPaciente
            nuevoPaciente.id = paciente.id

            //Actualizamos la información del paciente que coincida con el id
            const pacientesActualizados = pacientes.map(pacienteState =>
                // Si el id del paciente del arreglo coincide con el id del paciente que voy a editar entonces lo actualizado
                pacienteState.id === paciente.id ? nuevoPaciente : pacienteState
            );
            setPacientes(pacientesActualizados);

            setEditando(false);
        } else {
            //Creamos un Nuevo Registro
            nuevoPaciente.id = generarId()
            setPacientes([...pacientes, nuevoPaciente])
        }

        //Reiniciamos el Formulario
        setNombre("");
        setPropietario("");
        setEmail("");
        setAlta("");
        setSintomas("");
    }


    return (

        <div className="md:w-1/2 lg:w-2/5" >
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center  mb-10">Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold ">Administralos</span></p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handleSubmit}>

                {error && (<Error mensaje="Todos los campos son obligatorios" />)}

                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input type="text" name="propietario" id="propietario" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" value={propietario} onChange={e => setPropietario(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email Propietario</label>
                    <input type="email" name="email" id="email" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input type="date" name="alta" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" value={alta} onChange={e => setAlta(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea name="sintomas" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Sintomas del Paciente" value={sintomas} onChange={e => setSintomas(e.target.value)} />
                </div>

                <input type="submit" value={editando ? "Guardar Cambios" : "Agregar Paciente"} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-all" />
            </form>
        </div>
    )
}

export default Formulario