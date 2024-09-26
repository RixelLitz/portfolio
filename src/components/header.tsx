export default function Header() {
  return (
    <header className="flex flex-col gap-6 w-full">
      <div className="font-fredoka text-white font-normal flex justify-center w-full bg-purple-600">
        <h1>Entre em contato comigo clicando aqui!</h1>
      </div>
      <div className="flex justify-center items-center gap-6">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a className="font-fredoka text-black font-medium" href="#">
            Inicio
          </a>
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a className="font-fredoka text-black font-medium" href="#">
            Projetos
          </a>
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a className="font-fredoka text-black font-medium" href="#">
            Sobre
          </a>
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a className="font-fredoka text-black font-medium" href="#">
            Contato
          </a>
        </button>
      </div>
    </header>
  )
}
