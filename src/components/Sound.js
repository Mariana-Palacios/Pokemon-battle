// import React, {useState} from 'react';
import useSound from 'use-sound'
import pokemonMp3 from '../audio/pokemon.mp3'
// import Generation from './Pokemon/Generation'

const Sound = (change,turner) =>{
    // const [volume, setVolume] = useState(true)
    const [play, { stop }] = useSound(pokemonMp3)
    const playMusic = () =>{
      // setVolume(!volume)
      if(turner){
        play()
      }else{
        stop()
      }
    }
    // play()
    if(change){
      return (
        playMusic()
      )
    }else{
      console.log('estoy sonando')
      return(
        play()
      )
    }
}

export default Sound;