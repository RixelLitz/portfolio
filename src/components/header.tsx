export default function Header() {
  return (
    <header className="flex bg-black flex-col p-6 gap-6 w-full fixed z-10">
      <div className="flex justify-center items-center gap-6">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a className="font-fredoka text-white font-medium" href="#">
            Inicio
          </a>
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a className="font-fredoka text-white font-medium" href="#">
            Projetos
          </a>
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a className="font-fredoka text-white font-medium" href="#">
            Sobre
          </a>
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a className="font-fredoka text-white font-medium" href="#">
            Contato
          </a>
        </button>
      </div>
    </header>
  )
}
