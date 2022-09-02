import { SiPokemon } from "react-icons/si";
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';
import React, {useState} from 'react';
import Sound from '../Sound' 

const Nav = () => {
  const [icon, setIcon] = useState(true)
  const changeBoolean = () =>{
    // setIcon(!icon)
    return Sound(true,icon)
  }
    return (
      // <nav className="nav flex flex-j-s-b">
      <nav className="nav flex flex-j-s-b">
        <SiPokemon className="icon"/>
        {/* <Sound change={true}/> */}
        <button onClick={changeBoolean()} className='sound'>
          {icon?<BsVolumeMuteFill/>:<BsVolumeUpFill/>}
        </button>
      </nav>
    );
  }
  
export default Nav;