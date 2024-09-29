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

          <MediaCard
            image="./src/assets/projects/alphatec.jpg"
            title="AlphaTec"
            description="Descrição do outro projeto. Foi um desafio interessante e aprendi bastante..."
            codeLink="https://github.com/seu-repositorio/outro-projeto"
            deployLink="https://outroprojeto.com"
            technologies={['React', 'TypeScript', 'TailWindCSS']}
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
            image="./src/assets/projects/alphatec.jpg"
            title="AlphaTec"
            description="Descrição do outro projeto. Foi um desafio interessante e aprendi bastante..."
            codeLink="https://github.com/seu-repositorio/outro-projeto"
            deployLink="https://outroprojeto.com"
            technologies={['React', 'TypeScript', 'TailWindCSS']}
          />
          <MediaCard
            image="./src/assets/projects/alphatec.jpg"
            title="AlphaTec"
            description="Descrição do outro projeto. Foi um desafio interessante e aprendi bastante..."
            codeLink="https://github.com/seu-repositorio/outro-projeto"
            deployLink="https://outroprojeto.com"
            technologies={['React', 'TypeScript', 'TailWindCSS']}
          />

          <MediaCard
            image="./src/assets/projects/alphatec.jpg"
            title="AlphaTec"
            description="Descrição do outro projeto. Foi um desafio interessante e aprendi bastante..."
            codeLink="https://github.com/seu-repositorio/outro-projeto"
            deployLink="https://outroprojeto.com"
            technologies={['React', 'TypeScript', 'TailWindCSS']}
          />
          <MediaCard
            image="./src/assets/projects/alphatec.jpg"
            title="AlphaTec"
            description="Descrição do outro projeto. Foi um desafio interessante e aprendi bastante..."
            codeLink="https://github.com/seu-repositorio/outro-projeto"
            deployLink="https://outroprojeto.com"
            technologies={['React', 'TypeScript', 'TailWindCSS']}
          />
          <MediaCard
            image="./src/assets/projects/alphatec.jpg"
            title="AlphaTec"
            description="Descrição do outro projeto. Foi um desafio interessante e aprendi bastante..."
            codeLink="https://github.com/seu-repositorio/outro-projeto"
            deployLink="https://outroprojeto.com"
            technologies={['React', 'TypeScript', 'TailWindCSS']}
          />
          <MediaCard
            image="./src/assets/projects/alphatec.jpg"
            title="AlphaTec"
            description="Descrição do outro projeto. Foi um desafio interessante e aprendi bastante..."
            codeLink="https://github.com/seu-repositorio/outro-projeto"
            deployLink="https://outroprojeto.com"
            technologies={['React', 'TypeScript', 'TailWindCSS']}
          />
        </div>
      </div>
    </section>
  )
}
