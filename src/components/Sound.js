import React, {useState} from 'react';
import useSound from 'use-sound'
import pokemonMp3 from '../audio/pokemon.mp3'
import chooseMp3 from '../audio/chooseSound.mp3'
import Generation from './Pokemon/Generation'
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';

const Music = ({change}) =>{
    const [volume, setVolume] = useState(true)
    const [play, { stop }] = useSound(change?pokemonMp3:chooseMp3 )
    const playMusic = () =>{
      setVolume(!volume)
      if(volume){
        play()
      }else{
        stop()
      }
    }
    // play()
    if(change){
      return (
        <button onClick={playMusic} className='sound'>
          {volume?<BsVolumeMuteFill/>:<BsVolumeUpFill/>}
        </button>
      )
    }else{
      return(
        <Generation music={play}/>
      )
    }
}

export default Music;