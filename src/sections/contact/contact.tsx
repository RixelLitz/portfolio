import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white w-full p-14 flex flex-col gap-10 items-center"
    >
      <div>
        <div className="h-1 bg-gradient-to-r from-orange-500 to-blue-500 my-4" />
        <h1 className="text-black font-fredoka font-medium text-3xl">
          Entre em contato comigo!
        </h1>
      </div>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button className="bg-purple-600 p-2 rounded-full pl-8 pr-8">
        <a
          target="_blank"
          className="text-white font-fredoka text-1xl"
          href="https://wa.me/53997105226" rel="noreferrer"
        >
          Clique aqui
        </a>
      </button>
      <div className="flex gap-4 ">
        <a target="_blank" href="https://wa.me/53997105226" rel="noreferrer">
          <WhatsAppIcon />
        </a>
        <a target="_blank" href="https://github.com/RixelLitz" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/rianbritto/" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/rianbritto_"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
    </section>
  )
}
