import { useState } from 'react'
import './App.css'

function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      <div id='navbar' className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 text-white">

        <img src={"src/assets/vite.svg"} alt="logo" className='cursor-pointer'/>

        <ul className="flex gap-6 list-none">
          <button
            onClick={() => setAtivo(!ativo)}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition ${ativo ? "bg-blue-400" : "bg-gray-400"
              }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition ${ativo ? "translate-x-6" : "translate-x-0"
                }`}
            />
          </button>

          <li><a href="#" className='hover:text-blue-400 transition cursor-pointer'>Apresentação</a></li>
          <li><a href="#" className='hover:text-blue-400 transition cursor-pointer'>Projetos</a></li>
          <li><a href="#" className='hover:text-blue-400 transition cursor-pointer'>Tecnologias</a></li>
          <li><a href="#" className='hover:text-blue-400 transition cursor-pointer'>Contato</a></li>
        </ul>

      </div>

      <section id="apresentacao" className='relative min-h-screen overflow-hidden bg-[#1e2235] flex justify-center items-center gap-10 px-10'>

      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0b1635] via-[#191970] to-[#2d1b69]" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1635] to-[#2d1b69]" />


      <div className="absolute -right-[100px] -bottom-[150px] h-[400px] w-[400px] bg-violet-400/30 blur-3xl rounded-full" />

      <div className="absolute -right-45 -bottom-[90px] h-[300px] w-[300px] bg-purple-300/20 blur-3xl rounded-full" />

        <div className='relative z-10 w-[500px] flex flex-col gap-3'>
          <div className='flex flex-col'>
            <h2 className='text-6xl font-bold text-white pb-1'>Ana Paula Freire</h2>
            <h2 className='text-6xl font-bold text-indigo-400 pb-1'>Desenvolvedora</h2>
            <h2 className='text-6xl font-bold text-indigo-400 pb-[2px]'>Full Stack</h2>
            <h3 className='text-[17px] text-white'>Java / Spring Boot / Angular</h3>
          </div>
          
          {/* <img src={"src/assets/vite.svg"} alt="logo" /> */}

          <div className='flex gap-5 pt-6 '>
            <button className='bg-indigo-400 rounded-2xl py-2 px-8 font-semibold cursor-pointer '>Meus projetos</button>
            <button className='bg-transparent rounded-2xl py-2 px-8 border-2 border-indigo-400 text-indigo-400 font-semibold cursor-pointer '>Contato</button>
          </div>
          
        </div>

        <div id="sobre-mim" className='relative z-10 w-[900px]'>
          <h2 className='text-2xl font-bold text-white pb-2'>Sobre Mim</h2>
          <p className='text-white text-base leading-7'>Sou desenvolvedora Full Stack com mais de 2 anos de experiência na criação de sistemas web e desktop utilizando Java (Spring Boot) e Angular.
          Tenho experiência no desenvolvimento de APIs REST, regras de negócio, modelagem de banco de dados PostgreSQL e seguraça de aplicações com Spring Security (controle de acesso, autenticação e autorização).
          Já atuei também com arquitetura multi-tenant e integração entre aplicação desktop e sistema web, criando mecanismos de sincronização de dados entre ambientes distintos.
          Além disso, possuo experiência com Liquibase, organização do backend em arquitetura em camadas (Controller, Service e Repository) e interfaces responsivas com Angular.
          </p>

          <p className='text-white text-base leading-7 pt-5'> Sou formada em Análise e Desenvolvimento de Sistemas e estou constantemente buscando aprimorar minhas habilidades e me manter atualizada nas tecnologias mais recentes.</p>
        </div>
        
      
      </section>
        
    </>
  )
}

export default App
