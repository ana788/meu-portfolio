import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

type CardProps = {
    titulo: string
    descricao: string
    imagem: string
    tags: string[]
    detalhesTecnicos: string[]
}

function Card ({titulo, descricao, imagem, tags, detalhesTecnicos}: CardProps) {
    const [aberto, setAberto] = useState(false)

    return <div className="bg-indigo-900 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imagem} alt="Sunset in the mountains" />
        
        <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">{titulo}</div>
            <p className="text-white text-base ">
                {descricao}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {tags.map((tag, index) => (
                <span 
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    #{tag}
                </span>

            ))}
        </div>

        <button 
            onClick={() => setAberto(!aberto)}
            className="flex justify-between items-center w-full text-white px-6 py-4 cursor-pointer">
            <span>Detalhes Técnicos</span>
            <IoIosArrowDown 
                className={`transition-transform duration-300 ${
                    aberto ? "rotate-90" : ""
                }`}/>
        </button>

        {aberto && (
            <ul className={`mt-3 space-y-2 list-disc list-inside px-6 py-1 overflow-hidden transition-all duration-500 ease-in-out ${
                aberto
                    ? "max-h-40 opacity-100 py-2"
                    : "max-h-0 opacity-0 py-0"
            }`}>
                {detalhesTecnicos.map((item, index) => (
                <li key={index} className="text-white text-sm">
                    {item}
                </li>
                ))}
          </ul>
        )}
    </div>
}

export default Card