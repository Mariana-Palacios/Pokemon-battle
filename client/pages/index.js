// import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image'
import main from '../public/img/landing/main.png'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const LandingPage = () => {
  return(
    <div>
      <div className='background'>
      </div>
      <div className='pokemon'>
        <Image src={main} alt='pokemon' max-height = '100%' />
      </div>
      <section className='information'>
        <Link href="./Pokemon">
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
