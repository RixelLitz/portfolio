import { AnimatedBackground } from '../../components/MainAnimation'

export default function Main() {
  return (
    <main className="flex items-center justify-center w-full h-screen bg-white relative">
      <img className='absolute left-0 bottom-0 h-1/2 ' src="./src/assets/backgrounds/shape-left.png" alt="aaaaa" />
      <div className="absolute w-full h-full">
        <AnimatedBackground />
      </div>
      <div className=" flex items-center w-1/2 h-1/2 ">
        <div className="flex items-center gap-44 w-full h-full relative">
          <div className="flex flex-col justify-end">
            <h1 className="flex justify-center  p-2 font-fredoka text-5xl text-black">
              Rian Britto Pereira
            </h1>
            <h2 className="flex justify-center   p-2 bg-purple-400 rounded-full font-fredoka text-4xl text-black ">
              Software Engineer{' '}
            </h2>
          </div>
          <div className=" h-full w-1/2 flex justify-center items-center">
            <img
              className=" h-full"
              src="./src/assets/ilustrations/Programming-amico.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <img className='absolute right-0 top-0  h-1/2 ' src="./src/assets/backgrounds/shape.png" alt="aaaaa" />
    </main>
  )
}
