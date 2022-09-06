import Generation from './Generation/Generation';
import PokemonCore from './PokemonCore/PokemonCore';

const Pokemon = () =>{
    return (
      <div>
        <Generation/>
        <section className='pokemons flex flex-j-c flex-f-w'>
            <PokemonCore/>
            <PokemonCore/>
            <PokemonCore/>
            <PokemonCore/>
            <PokemonCore/>
            <PokemonCore/>
        </section>
      </div>
    )
}

export default Pokemon;