import { useState } from "react"
import { tecnologias } from "../data/tecnologias"
import CardTecnologias from './cardTecnologias'
import { FaBoltLightning, FaDatabase } from "react-icons/fa6"
import { GrTest } from "react-icons/gr"
import { GiLips } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdDeveloperMode } from "react-icons/md";
import { IoIosCloudUpload } from "react-icons/io";

const categorias = [
    {
        nome: "Todos",
        icone: FaBoltLightning

    },
    {
        nome: "Frontend",
        icone: HiOutlineDesktopComputer
    },
    {
        nome: "Backend",
        icone: MdDeveloperMode
    },
    {
        nome: "DevOps",
        icone: IoIosCloudUpload
    },
    {
        nome: "UI Styling",
        icone: GiLips
    },
    {
        nome: "Testes",
        icone: GrTest
    },
    {
        nome: "Banco de Dados",
        icone: FaDatabase
    }

]

function TecnologiasSection() {
    const [filtroAtivo, setFiltroAtivo] = useState("Todos")

    const tecnologiasFiltradas =
        filtroAtivo === "Todos"
            ? tecnologias
            : tecnologias.filter(
                (tec) => tec.categoria === filtroAtivo
            )

    return (
        <div id="tecnologias" className="h-[900px] bg-[#212830] flex flex-col items-center px-10 py-16">
            <h2 className="text-5xl text-white font-medium ">Tecnologias</h2>

            <p className="text-white text-base pt-3 mb-14">Uma lista com as principais ferramentas e tecnologias que utilizo</p>

            <div className="flex gap-4 mb-14">
                {categorias.map((categoria) => {
                    const Icone = categoria.icone

                    return (
                        <button
                            key={categoria.nome}
                            onClick={() => setFiltroAtivo(categoria.nome)}
                            className={`flex gap-2 items-center justify-center 
                            cursor-pointer 
                            rounded-4xl 
                            py-1 px-4
                            ${filtroAtivo === categoria.nome ? "bg-indigo-700 text-indigo-400"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 transition-all duration-300"}
                        `}
                        >
                            <Icone className="" />
                            <span className="font-medium">{categoria.nome}</span>

                            {/* <Icone className="text-white/40"/>
                        <span className="text-white/40">{categoria.nome}</span> */}
                        </button>
                    )

                })}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {tecnologiasFiltradas.map((tec, index) => (
                    <CardTecnologias
                        key={index}
                        {...tec}
                    />
                ))}
            </div>


        </div>
    )

}

export default TecnologiasSection