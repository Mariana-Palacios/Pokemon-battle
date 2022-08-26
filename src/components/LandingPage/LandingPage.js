import React from 'react';
// import { SiPokemon } from "react-icons/si";
// import charmander from '../../img/landing/6.gif'
// import gengar from '../../img/landing/94.gif'
// import eevee from '../../img/landing/133.gif'
import main from '../../img/landing/main.png'
import background from '../../img/landing/Group1.png' 
// BsGithub
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
      <img src={background} alt='background' className='background'/>
      <img src={main} alt='pokemon' className='main'/>
      {/* <section className='information'>
        <button className='simple-pixel-button'>
          Let's started
        </button>
      </section> */}
      <div className='social flex'>
        <BsLinkedin className='icon'/>
        <BsGithub className='icon'/>
      </div>
    </div>
  )
}
  
export default LandingPage;