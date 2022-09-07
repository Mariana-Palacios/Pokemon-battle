import Link from 'next/link'
import React, {useState, useRef} from 'react';
import { SiPokemon } from "react-icons/si";
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';
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
      <nav className="nav flex flex-j-s-b flex-a-i">
        <Link href="../../">
          <SiPokemon className="nav__icon"/>
        </Link>
        <div className='nav__sound flex flex-j-c flex-a-i' onClick={togglePlay} >
          <audio ref={audioPlayer} src={chooseSound} id='audio' preload="metadata"></audio>
          {icon?<BsVolumeMuteFill className="nav__sound--volume"/>:<BsVolumeUpFill className="nav__sound--volume"/>}
        </div>
      </nav>
    );
  }
  
export default Nav;