// import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image'
import main from '../public/img/landing/main.png'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const LandingPage = () => {
  return(
    <div className='flex'>
      {/* background image */}
      <div className='background'>
        <div className='background__pokemonMain'>
          <Image src={main} alt='pokemon' max-height = '100%' />
        </div>
      </div>
      <div className='information'>
        <section className='information__button'>
          <Link href="./Pokemon">
            <button className='simple-pixel-button'>
              Let's started
            </button>
          </Link>
        </section>
        <div className='flex information__social '>
          <Link href='https://www.linkedin.com/in/mariana-palacios-9b1956236/'>
            <BsLinkedin className='icon'/>
          </Link>
          <Link href='https://github.com/Mariana-Palacios'>
            <BsGithub className='icon'/>
          </Link>
        </div>
      </div>
    </div>
  )
}
  
export default LandingPage;
