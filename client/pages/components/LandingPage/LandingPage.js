// import React from 'react';
import Image from 'next/image'
import main from '../../../public/img/landing/main.png'
import background from '../../../public/img/landing/Group1.png' 
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
    <div className=''>
      <Image src={background} alt='background' className='background'/>
      <Image src={main} alt='pokemon' className='main'/>
      <section className='information'>
        <button className='simple-pixel-button'>
          Let's started
        </button>
      </section>
      <div className='social flex'>
        <BsLinkedin className='icon'/>
        <BsGithub className='icon'/>
      </div>
    </div>
  )
}
  
export default LandingPage;