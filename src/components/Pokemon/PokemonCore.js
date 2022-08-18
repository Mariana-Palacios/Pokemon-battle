import React, {useState} from 'react';
import Pokemon from './Pokemon';
import PokemonChoose from './PokemonChoose';



const PokemonCore = () => {
    const [view, setView] = useState(true)
    const changeBoolean = () =>{
      setView(!view)
      return view
    }
    const pokedex = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    return (
      <div>
        {/* {view?<Pokemon pokemonNumber={650} changeBoolean={changeBoolean}/>:<PokemonChoose changeBoolean={changeBoolean}/>} */}
        {pokedex.map((val,index)=>view?<Pokemon pokemonNumber={val} changeBoolean={changeBoolean}/>:<PokemonChoose changeBoolean={changeBoolean}/>)}
      </div>
    )
}

export default PokemonCore;