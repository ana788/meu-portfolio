import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='navbar' className="flex justify-between items-center px-8 py-4 bg-indigo-950 text-white ">

        <img src={"src/assets/vite.svg"} alt="logo" />

        <ul className="flex gap-6 list-none">
          <li><a href="#" className='hover:text-blue-400 transition'>Apresentação</a></li>
          <li><a href="#" className='hover:text-blue-400 transition'>Projetos</a></li>
          <li><a href="#" className='hover:text-blue-400 transition'>Tecnologias</a></li>
          <li><a href="#" className='hover:text-blue-400 transition'>Contato</a></li>
        </ul>

      </div>

      <section id="apresentacao" className='min-h-screen flex justify-center items-center gap-10 px-10 bg-gradient-to-b from-indigo-950 to-violet-950'>

        <div className='w-[500px] flex flex-col gap-3'>
          <div className='flex flex-col'>
            <h2 className='text-6xl font-bold text-white pb-1'>Ana Paula Freire</h2>
            <h2 className='text-6xl font-bold text-indigo-400 pb-1'>Desenvolvedora</h2>
            <h2 className='text-6xl font-bold text-indigo-400 pb-[2px]'>Full Stack</h2>
            <h3 className='text-[17px] text-white'>Java / Spring Boot / Angular</h3>
          </div>
          
          {/* <img src={"src/assets/vite.svg"} alt="logo" /> */}

          <div className='flex gap-5 pt-6 '>
            <button className='bg-indigo-400 rounded-2xl py-2 px-8 font-semibold'>Meus projetos</button>
            <button className='bg-transparent rounded-2xl py-2 px-8 border-2 border-indigo-400 text-indigo-400 font-semibold'>Contato</button>
          </div>
          
        </div>

        <div id="sobre-mim" className='w-[900px]'>
          <h2 className='text-2xl font-bold text-white pb-2'>Sobre Mim</h2>
          <p className='text-white text-base leading-7'>Sou desenvolvedora Full Stack com mais de 2 anos de experiência na criação de sistemas web e desktop utilizando Java (Spring Boot) e Angular.
          Tenho experiência no desenvolvimento de APIs REST, regras de negócio, modelagem de banco de dados PostgreSQL e seguraça de aplicações com Spring Security (controle de acesso, autenticação e autorização).
          Atuei também em arquitetura multi-tenant e integração entre aplicação desktop e sistema web, criando mecanismos de sincronização de dados entre ambientes distintos.
          Além disso, possuo experiência com Liquibase, organização backend em arquitetura em camadas (Controller, Service e Repository) e interfaces responsivas com Angular.
  Atualmente, estou focada no desenvolvimento de sistemas web com React e TypeScript, buscando constantemente aprimorar minhas habilidades e me manter atualizada nas tecnologias mais recentes.
          </p>
        </div>
        
      
      </section>
        
    </>
  )
}

export default App
