import { tecnologias } from "../data/tecnologias"
import CardTecnologias from './cardTecnologias'

function TecnologiasSection () {
    return (
    <div id="tecnologias" className="h-[900px] bg-[#212830] flex flex-col items-center">
        <h2 className="text-5xl text-white font-medium ">Tecnologias</h2>

        <p className="text-white text-base pt-3 pb-8">Uma lista com as principais ferramentas e tecnologias que utilizo</p>

        <div className='grid grid-cols-3 gap-4'>
            {tecnologias.map((tecnologia, index) => (
                <CardTecnologias
                    key={index}
                    {...tecnologia}
                 />
            ))}
        </div>
            

    </div>
)
    
}

export default TecnologiasSection