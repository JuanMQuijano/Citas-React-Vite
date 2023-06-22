function Paciente({ paciente, setPaciente, pacientes, setPacientes }) {

    const handleClickEliminar = (id) => {
        const confirmarEliminar = confirm("¿Quieres Eliminar Este Paciente?");

        if (confirmarEliminar) {
            // Eliminamos del arreglo el paciente que tenga el ID x
            const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id);
            setPacientes(pacientesActualizados);
        }
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}<span className="font-normal normal-case">{paciente.nombre}</span> </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}<span className="font-normal normal-case">{paciente.propietario}</span> </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}<span className="font-normal normal-case">{paciente.email}</span> </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}<span className="font-normal normal-case">{paciente.alta}</span> </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}<span className="font-normal normal-case">{paciente.sintomas}</span> </p>

            <div className="flex justify-between mt-10">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold uppercase rounded-lg" onClick={() => {
                    //Establecemos la variable de paciente con el objeto de paciente
                    setPaciente(paciente)
                }}>Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-bold uppercase rounded-lg" onClick={() => { handleClickEliminar(paciente.id) }}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente