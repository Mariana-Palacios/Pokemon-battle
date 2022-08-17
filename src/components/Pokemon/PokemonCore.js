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
      <>
        {view?<Pokemon pokemonNumber={1} changeBoolean={changeBoolean}/>:<PokemonChoose/>}
        {console.log(view)}
      </>
    )
}

export default PokemonCore;