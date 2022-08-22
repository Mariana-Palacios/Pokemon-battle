import React, { useState} from 'react';
import Pokemon from './Pokemon';
import PokemonChoose from './PokemonChoose';

const PokemonCore = () =>{
    const [name,setName] = useState("")
    const [view, setView] = useState(true)
    const changeBoolean = (e) =>{
      setView(!view)
      if(name!==""){
        setName("")
      }else{
        setName(e.target.textContent)
      }
    }
    return (
      <div>
        {view?<PokemonChoose changeBoolean={changeBoolean} />:<Pokemon changeBoolean={changeBoolean} name={name} option={true}/>}
      </div>
    )
}

export default PokemonCore;