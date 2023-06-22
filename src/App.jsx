//Importando los hooks y los componentes que vamos a usar
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  //Establacemos las variables con sus hooks por defecto en el App, para hacerlas reusables en cualquier componente.
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const [paciente, setPaciente] = useState({});

  //Al momento en el que haya un cambio en la variable de pacientes, vamos a almacenar ese arreglo en el localStorage
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">

      {/* Renderizamos el Header */}
      <Header />

      <div className="mt-12 md:flex">
        {/* Renderizamos el Formulario pasandole sus props */}
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} />
        {/* Rendreizamos el Listado de Pacientes con sus props */}
        <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes} setPaciente={setPaciente} />
      </div>
    </div>
  )
}

export default App
