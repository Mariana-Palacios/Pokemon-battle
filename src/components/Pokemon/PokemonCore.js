import React, {useState} from 'react';
import Pokemon from './Pokemon';
import PokemonChoose from './PokemonChoose';

const PokemonCore = () => {
    const [view, setView] = useState(true)
    const changeBoolean = () =>{
      setView(!view)
      return view
    }
    return (
      <div>
        {view?<Pokemon pokemonNumber={650} changeBoolean={changeBoolean}/>:<PokemonChoose changeBoolean={changeBoolean}/>}
        {console.log(view)}
      </div>
    )
}

export default PokemonCore;