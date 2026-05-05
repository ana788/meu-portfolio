import { useState } from "react"
import Card from "./card"
import { projetos } from "../data/projetos"


function ProjetosSection () {
    const [cardAberto, setCardAberto] = useState<number | null>(null)

    return <section className="bg-[#212830] px-10 py-16">
        <h2 className="text-6xl text-white font-medium">Meus Projetos</h2>

        <div className="flex justify-center w-full py-8">
            <div id="cards" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
               
                {projetos.map((projeto, index) => (
                    <Card
                        key={index}
                        aberto={cardAberto === index}
                        onToggle={() =>
                            setCardAberto(
                                cardAberto === index ? null : index
                            )
                        }
                        {...projeto}
                    />
                ))}

            </div>
        </div>
        
    </section>
}

export default ProjetosSection