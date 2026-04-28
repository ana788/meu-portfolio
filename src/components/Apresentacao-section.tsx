
const titulo = "text-6xl font-bold"
const tituloBranco = `${titulo} text-white`
const tituloLilas = `${titulo} text-indigo-400`
const botaoBase = "rounded-2xl py-2 px-8 font-semibold cursor-pointer"
const paragrafo = "text-white text-base leading-7"

function ApresentacaoSection(){

    return <section className='relative min-h-screen overflow-hidden bg-[#1e2235] flex justify-center items-center gap-10 px-10'>

        {/*Fundo gradiente e glow lilás no canto inferior*/}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0b1635] via-[#191970] to-[#2d1b69]" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1635] to-[#2d1b69]" />

        <div className="absolute -right-[100px] -bottom-[150px] h-[400px] w-[400px] bg-violet-400/30 blur-3xl rounded-full" />

        <div className="absolute -right-45 -bottom-[90px] h-[300px] w-[300px] bg-purple-300/20 blur-3xl rounded-full" />

        <div id="titulo" className='relative z-10 w-full max-w-lg flex flex-col gap-3'>
            <div className='flex flex-col'>
                <h2 className={`${tituloBranco} pb-1`}>Ana Paula Freire</h2>
                <h2 className={`${tituloLilas} pb-1`}>Desenvolvedora</h2>
                <h2 className={`${tituloLilas} pb-[2px]`}>Full Stack</h2>
                <h3 className='text-lg text-white'>Java / Spring Boot / Angular</h3>
            </div>

            <div className='flex gap-5 pt-6 '>
                <button className={`${botaoBase} bg-indigo-400`} >Meus projetos</button>
                <button className={`${botaoBase} bg-transparent border-2 border-indigo-400 text-indigo-400`}>Contato</button>
            </div>

        </div>

        <div id="sobre-mim" className='relative z-10 w-full max-w-4xl'>
            <h2 className='text-2xl font-bold text-white pb-2'>Sobre Mim</h2>

            <p className={`${paragrafo}`}>
                Sou desenvolvedora Full Stack com mais de 2 anos de experiência na criação de sistemas web e desktop utilizando Java (Spring Boot) e Angular.
                Tenho experiência no desenvolvimento de APIs REST, regras de negócio, modelagem de banco de dados PostgreSQL e seguraça de aplicações com Spring Security (controle de acesso, autenticação e autorização).
            </p>

            <p className={`${paragrafo} pt-5`}>
                Já atuei também com arquitetura multi-tenant e integração entre aplicação desktop e sistema web, criando mecanismos de sincronização de dados entre ambientes distintos.
                Além disso, possuo experiência com Liquibase, organização do backend em arquitetura em camadas (Controller, Service e Repository) e interfaces responsivas com Angular.
            </p>

            <p className={`${paragrafo} pt-5`}> Sou formada em Análise e Desenvolvimento de Sistemas e estou constantemente buscando aprimorar minhas habilidades e me manter atualizada nas tecnologias mais recentes.</p>
        </div>

    </section>
}

export default ApresentacaoSection