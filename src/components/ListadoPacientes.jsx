//Importamos el componente de Paciente
import Paciente from "./Paciente"

function ListadoPacientes({ pacientes, setPaciente, setPacientes }) {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {/* Validamos si hay pacientes  */}
            {pacientes && pacientes.length ? (
                <>

                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
                    </p>

                    {/* Iteramos sobre cada uno de los pacientes y generamos un componente de Paciente  */}
                    {pacientes.map(paciente => (
                        // Le agregamos un key al componente y le pasamos sus props
                        <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} pacientes={pacientes} setPacientes={setPacientes} />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">Aún No Hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza Agregando Pacientes {""}
                        <span className="text-indigo-600 font-bold ">y Aparecerán en Este Lugar</span>
                    </p>
                </>
            )}

        </div>
    )
}

export default ListadoPacientes