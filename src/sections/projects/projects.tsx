import MediaCard from '../../components/card'

export default function Projects() {
  return (
    <section id="projects" className="bg-white p-14 flex flex-col items-center">
      <img
        className="absolute left-0 w-1/4"
        src="./src/assets/backgrounds/shape-left.png"
        alt=""
      />
      <div className="flex  flex-col gap-36 mt-40 items-center justify-center">
        {/* Div que gerencia a section destaques */}
        <div className="flex flex-col text-center items-center">
          {/* Div que gerencia o titulo destaques */}
          <h1 className="text-black font-medium text-3xl bg-purple-400 rounded-full p-2">
            Destaques
          </h1>
          <h2 className="text-black font-normal text-2xl">
            Confira meus principais projetos freelances
          </h2>
        </div>
        <div className="flex justify-center place-items-center gap-32 flex-wrap ">
          {/* Div que acopla os cards destaques */}
          <MediaCard
            image="./src/assets/projects/ayla.png"
            title="AylaBot"
            description="AylaBot se trata de um site completo para um bot. Onde as principais exigências era uma responsividade bem elaborada..."
            codeLink="https://github.com/RixelLitz/site-ayla"
            deployLink="https://ayla.hostsquare.com.br/"
            technologies={['HTML5', 'CSS3', 'JS']}
          />

        </div>
      </div>

      <div className="flex  flex-col gap-36 mt-40 items-center justify-center">
        {/* Div que gerencia a parte dos outros projetos */}
        <div className="flex  flex-col text-center w-1/5">
          {/* div com titulo da section projects */}
          <div className="h-1 bg-gradient-to-r from-orange-500 to-blue-500 my-4" />
          <h1 className="font-fredoka font-medium  text-3xl">Meus projetos</h1>
        </div>
        <div className=" p-6 items-center justify-center flex gap-20 flex-wrap">
          {/* Div que acopla os cards */}
          <MediaCard
            image="./src/assets/projects/expernotes.png"
            title="ExpertNotes"
            description="Uma aplicação web feito com React, TypeScript e TailWindCSS, esse projeto foi feito para gerenciar notas. podendo salvar, editar e deletar."
            codeLink="https://github.com/RixelLitz/Expert-Notes?tab=readme-ov-file"
            deployLink="https://expert-notes-phi.vercel.app/"
            technologies={['React', 'TypeScript', 'TailWindCSS']}
          />
          <MediaCard
            image="./src/assets/projects/devlinks.png"
            title="DevLinks"
            description="Um projeto que fez parte do meu aprendizado e consolidou muito meus conhecimentos. Eu pensei, por que não unir todas minhas redes sociais em um só lugar?"
            codeLink="https://github.com/RixelLitz/dev-links"
            deployLink="https://dev-links-lake.vercel.app/"
            technologies={['HTML5', 'CSS3', 'JS']}
          />

          <MediaCard
            image="./src/assets/projects/spotify.png"
            title="AlphaTec"
            description="Uma copia do spotify, treinei e pratiquei meus conhecimentos com responsividade, inclusive dei aula ensinando fazer esse projeto."
            codeLink="https://github.com/RixelLitz/Spotify-Alura?tab=readme-ov-file"
            deployLink="https://spotify-rb.vercel.app/"
            technologies={['HTML', 'CSS', 'JS']}
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center justify-center gap-8">
        <h1 className="text-black text-2xl font-medium font-fredoka mt-10">
          Mais projetos chegando!
        </h1>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button className='bg-purple-400 text-1xl text-white font-fredoka font-medium pr-6 pl-6 p-2 rounded-full'>
          <a href="https://github.com/RixelLitz">
            Acompanhe o desenvolvimento!
          </a>
        </button>
      </div>
    </section>
  )
}
