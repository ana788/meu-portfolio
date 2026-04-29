import Card from "./card"

function ProjetosSection () {
    return <section className="bg-[#212830] px-10 py-16">
        <h2 className="text-6xl text-white font-medium">Meus Projetos</h2>

        <div className="flex justify-center w-full py-8">
            <div id="cards" className="grid grid-cols-2 gap-4">
                <Card 
                    titulo="The Coldest Sunset"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                    imagem="src/assets/card-top.jpg"
                    tags={["photography", "travel", "winter"]}
                    detalhesTecnicos={["A", "B", "C"]}
                />

            </div>
        </div>
        
    </section>
}

export default ProjetosSection