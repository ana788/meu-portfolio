
type CardTecnologiaProps = {
  titulo: string
  subtitulo: string
  imagem: string
  cor_fundo: string
}

function CardTecnologias({titulo, subtitulo, imagem, cor_fundo}: CardTecnologiaProps){
    return(
      <div className="flex bg-white/5 rounded-lg">
        <div className="h-full flex items-center pl-3 pr-2">
          <div 
            style={{ backgroundColor: cor_fundo }}
            className='h-[60px] w-[60px] rounded-lg flex items-center justify-center opacity-80'>
            <img src={imagem} className="h-[40px] w-[40px]" />
          </div>
        </div>

        <div className="py-4 pl-2 pr-10 flex flex-col justify-between leading-none">
          <div className="text-white font-bold text-xl">{titulo}</div>
          <p className="text-white/70 text-base">{subtitulo}</p>
        </div>

      </div>   
    )
}

export default CardTecnologias