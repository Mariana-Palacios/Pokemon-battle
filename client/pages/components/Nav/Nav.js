import { SiPokemon } from "react-icons/si";
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';
import React, {useState, useRef} from 'react';
import chooseSound from '../../../public/audio/pokemon.mp3'

const Nav = () => {
  //state
  const [icon, setIcon] = useState(true)

  //references 
  const audioPlayer = useRef()

  const togglePlay= () =>{
    setIcon(!icon);
    icon?audioPlayer.current.play():audioPlayer.current.pause()
  }
    return (
      <nav className="nav flex flex-j-s-b">
        <SiPokemon className="icon"/>
        <div onClick={togglePlay} className='sound'>
          <audio ref={audioPlayer} src={chooseSound} preload="metadata"></audio>
          {icon?<BsVolumeMuteFill/>:<BsVolumeUpFill/>}
        </div>
      </nav>
    );
  }
  
export default Nav;