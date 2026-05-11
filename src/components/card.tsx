import { IoIosArrowDown } from "react-icons/io"

type CardProps = {
    titulo: string
    descricao: string
    imagem: string
    tags: string[]
    detalhesTecnicos: string[]
    aberto: boolean
    onToggle: () => void
}

function Card ({titulo, descricao, imagem, tags, detalhesTecnicos, aberto, onToggle}: CardProps) {

    return (
        <div
          className="
            bg-white/5
            backdrop-blur-md
            rounded-[5rem]
            p-3
            max-w-sm
            min-h-[562px]
            shadow-2xl
          "
        >
          
          {/* Imagem */}
          <div className="overflow-hidden rounded-[4.2rem]">
            <img
              className="
                w-full
                h-[300px]
                object-cover
              "
              src={imagem}
              alt={titulo}
            />
          </div>
      
          {/* Conteúdo */}
          <div className="px-3 py-5">
            <div className="font-bold text-3xl text-white leading-tight mb-2">
              {titulo}
            </div>
      
            <p className="text-white/70 text-base leading-relaxed">
              {descricao}
            </p>
          </div>
      
          {/* Tags */}
          <div className="px-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="
                  bg-white/10
                  border border-white/10
                  rounded-full
                  px-3
                  py-1
                  text-sm
                  text-white/80
                "
              >
                #{tag}
              </span>
            ))}
          </div>
      
          {/* Botão */}
          <button
            onClick={onToggle}
            className="
              flex
              justify-between
              items-center
              w-full
              text-white
              px-8
              py-6
              cursor-pointer
            "
          >
            <span className="text-white/90">
              Ver detalhes
            </span>
      
            <IoIosArrowDown
              className={`
                transition-transform duration-300
                ${aberto ? "rotate-180" : ""}
              `}
            />
          </button>
      
          {/* Dropdown */}
          <ul
            className={`
              space-y-2
              list-disc
              list-inside
              px-6
              overflow-hidden
              transition-all
              duration-500
              ease-in-out
      
              ${
                aberto
                  ? "max-h-60 opacity-100 pb-6"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            {detalhesTecnicos.map((item, index) => (
              <li
                key={index}
                className="text-white/70 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
}

export default Card