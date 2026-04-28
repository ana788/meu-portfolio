import { useState } from 'react'

function Navbar(){
    const [ativo, setAtivo] = useState(false);

    return <div id='navbar' className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 text-white">

        <img src={"src/assets/vite.svg"} alt="logo" className='cursor-pointer' />

        <div className='flex gap-5 items-center'>
            <button
                onClick={() => setAtivo(!ativo)}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition ${ativo ? "bg-blue-400" : "bg-gray-400"} cursor-pointer`}
            >
                <div
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition ${ativo ? "translate-x-6" : "translate-x-0"}`}
                />
            </button>

            <ul className="flex gap-6 list-none">
                <li><a href="#" className='hover:text-blue-400 transition cursor-pointer'>Apresentação</a></li>
                <li><a href="#" className='hover:text-blue-400 transition cursor-pointer'>Projetos</a></li>
                <li><a href="#" className='hover:text-blue-400 transition cursor-pointer'>Tecnologias</a></li>
                <li><a href="#" className='hover:text-blue-400 transition cursor-pointer'>Contato</a></li>
            </ul>
        </div>
        
    </div>
}

export default Navbar