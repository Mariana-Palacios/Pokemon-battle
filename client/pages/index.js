// import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image'
import main from '../public/img/landing/main.png'
// import background from '../../public/img/landing/Group1.png' 
import { BsGithub, BsLinkedin } from "react-icons/bs";

const LandingPage = () => {
  return(
    // <div className='background '>
    //   <SiPokemon className='logo'/>
    //   <div className='container_pokemon'>
    //     <img src={charmander} alt='background' className='charmander'/>
    //     <div className='container_pokemon-up'>
    //       <img src={eevee} alt='background' className='eevee'/>
    //       <img src={gengar} alt='background' className='gengar'/>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className='background'>
        {/* <Image src={background} alt='background' max-width='100%' max-height = '100%'/> */}
      </div>
      <div className='pokemon'>
        <Image src={main} alt='pokemon' max-height = '100%' />
      </div>
      <section className='information'>
        <Link href="./Pokemon/Generation">
          <button className='simple-pixel-button'>
            Let's started
          </button>
        </Link>
      </section>
      <div className='social flex'>
        <Link href='https://www.linkedin.com/in/mariana-palacios-9b1956236/'>
          <BsLinkedin className='icon'/>
        </Link>
        <Link href='https://github.com/Mariana-Palacios'>
          <BsGithub className='icon'/>
        </Link>
      </div>
    </div>
  )
}
  
export default LandingPage;
