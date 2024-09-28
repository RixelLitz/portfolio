import { AnimatedBackground } from '../../components/MainAnimation'

export default function Main() {
  return (
    <main className="flex items-center justify-center w-full h-screen bg-neutral-900 relative">
      <div className="absolute w-full h-full">
        <AnimatedBackground />
      </div>
      <div className=" flex items-center w-1/2 h-1/2 ">
        <div className="flex items-center gap-44 w-full h-full relative">
          <div className="flex flex-col justify-end">
            <h1 className="flex justify-center  p-2 font-fredoka text-5xl text-white">
              Rian Britto Pereira
            </h1>
            <h2 className="flex justify-center   p-2 bg-purple-400 rounded-full font-fredoka text-4xl text-black ">
              FullStack Developer{' '}
            </h2>
          </div>
          <div className=" h-full w-1/2 flex justify-center items-center">
            <img
              className=" h-full"
              src="./src/assets/ilustrations/coding.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  )
}
