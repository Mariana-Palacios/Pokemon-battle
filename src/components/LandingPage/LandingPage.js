import React from 'react';
import charmander from '../../img/landing/6.gif'
import gengar from '../../img/landing/94.gif'
import eevee from '../../img/landing/133.gif'

const LandingPage = () => {
  return(
    <div className='background '>
      <div className='container_pokemon'>
        <img src={charmander} alt='background' className='charmander'/>
        <div className='container_pokemon-up'>
          <img src={eevee} alt='background' className='eevee'/>
          <img src={gengar} alt='background' className='gengar'/>
        </div>
      </div>
    </div>
  )
}
  
export default LandingPage;