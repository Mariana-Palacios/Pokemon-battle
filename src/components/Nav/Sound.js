import React, {useState} from 'react';
import useSound from 'use-sound'
import mySound from '../../audio/pokemon.mp3'
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';

const Music = () =>{
    const [volume, setVolume] = useState(true)
    const [play, { stop }] = useSound(mySound)
    const playMusic = () =>{
      setVolume(!volume)
      console.log(volume)
      if(volume){
        play()
      }else{
        stop()
      }
    }
    // play()
    return (
      <button onClick={playMusic} className='sound'>
        {volume?<BsVolumeMuteFill/>:<BsVolumeUpFill/>}
      </button>
    )
}

export default Music;