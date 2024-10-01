import WaveSVG from '../../components/WaveSVG';
import LazyImage from '../../components/LazyImage';

export default function About() {
  return (
    <section id='about' className="bg-white flex flex-col items-center">
      <WaveSVG />
      <div className="flex justify-center mt-80 items-center gap-24">
        <div className="w-1/3">
          <h1 className="font-fredoka font-medium text-3xl">
            Um pouco sobre mim
          </h1>
          <p className="font-fredoka font-normal text-1xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint,
            exercitationem tempora tenetur aperiam praesentium natus deleniti
            temporibus consequatur rem reprehenderit vero maiores corrupti totam
            porro officia vitae repellat sit? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Labore nisi voluptate at doloremque
            aspernatur, asperiores exercitationem harum nostrum sint maxime.
            Ipsam alias eligendi non explicabo? Commodi excepturi numquam
            consequuntur repellat.
          </p>
        </div>
        <div className="h-full">
          <LazyImage
            className="h-full"
            src="./src/assets/ilustrations/aboutme.gif"
            alt="Sobre mim"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-24">
        <div>
          <LazyImage
            src="./src/assets/ilustrations/rocket.gif"
            alt="Objetivo"
          />
        </div>
        <div className="w-1/3">
          <h1 className="font-fredoka font-medium text-3xl">Meu objetivo</h1>
          <p className="font-fredoka font-normal text-1xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint,
            exercitationem tempora tenetur aperiam praesentium natus deleniti
            temporibus consequatur rem reprehenderit vero maiores corrupti totam
            porro officia vitae repellat sit? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Labore nisi voluptate at doloremque
            aspernatur, asperiores exercitationem harum nostrum sint maxime.
            Ipsam alias eligendi non explicabo? Commodi excepturi numquam
            consequuntur repellat.
          </p>
        </div>
      </div>
    </section>
  );
}
