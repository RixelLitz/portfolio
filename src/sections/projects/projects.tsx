import MediaCard from '../../components/card'

export default function Projects() {
  return (
    <section className="bg-white p-14 flex flex-col items-center">
         <img className="absolute left-0 w-1/4" src="./src/assets/backgrounds/shape-left.png" alt="" />
      <div className="w-full relative">
        <div className="flex flex-col text-center items-center">
          <h1 className="text-black font-medium text-3xl bg-purple-400 rounded-full p-2">
            Destaques
          </h1>
          <h2 className="text-black font-normal text-2xl">
            Confira meus principais projetos freelances
          </h2>
        </div>
        <div className="w-full mt-10 flex items-center justify-center ">
          <div className="flex gap-64">
            <MediaCard
              image="./src/assets/projects/ayla.png"
              title="AylaBot"
              description="AylaBot se trata de um site completo para um bot. Onde as principais exigências era uma responsividade bem elaborada..."
              codeLink="https://github.com/RixelLitz/site-ayla"
              deployLink="https://ayla.hostsquare.com.br/"
              technologies={['HTML5', 'CSS3', 'JS']}
            />

            <MediaCard
              image="./src/assets/projects/another-project.png"
              title="AlphaTec"
              description="Descrição do outro projeto. Foi um desafio interessante e aprendi bastante..."
              codeLink="https://github.com/seu-repositorio/outro-projeto"
              deployLink="https://outroprojeto.com"
              technologies={['React', 'TypeScript', 'TailWindCSS']}
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}
