import MediaCard from '../../components/card'

export default function Projects() {
  return (
    <section id="projects" className="bg-white p-14 flex flex-col items-center">
      <img
        className="absolute left-0 w-1/4"
        src="./src/assets/backgrounds/shape-left.png"
        alt=""
      />
      <div className="w-full relative">
        <div className="flex flex-col text-center items-center">
          <h1 className="text-black font-medium text-3xl bg-purple-400 rounded-full p-2">
            Destaques
          </h1>
          <h2 className="text-black font-normal text-2xl">
            Confira meus principais projetos freelances
          </h2>
        </div>
        <div className="w-full mt-10 flex items-center justify-center flex-col ">
          <div className="flex gap-32 flex-wrap">
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
          <div className="flex flex-col flex-wrap col-span-2 gap-36 mt-40 items-center justify-center">
            <div className="flex flex-col text-center w-1/5">
              <div className="h-1  bg-gradient-to-r from-orange-500 to-blue-500 my-4" />
              <h1 className='font-fredoka font-medium  text-3xl'>Meus projetos</h1>
            </div>
            <div className="flex gap-20 flex-wrap">
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
        </div>
      </div>
    </section>
  )
}
