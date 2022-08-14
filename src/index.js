import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Pokemon from './components/Pokemon';
import PokemonChoose from './components/PokemonChoose';
import './styles/index.css'

const [state, setState] = useState(true)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <h1 className='text-a-c'>BATTLE</h1>
    <div className='flex flex-j-c'>
      {state?<Pokemon pokemonNumber={1}/>:<PokemonChoose/>}
      <Pokemon pokemonNumber={150}/>
      <Pokemon pokemonNumber={50}/>
      <Pokemon pokemonNumber={68}/>
      <Pokemon pokemonNumber={90}/>
      <Pokemon pokemonNumber={45}/>
    </div>
    <div className='flex flex-j-c'>
      <Pokemon pokemonNumber={1}/>
      <Pokemon pokemonNumber={150}/>
      <Pokemon pokemonNumber={50}/>
      <Pokemon pokemonNumber={68}/>
      <Pokemon pokemonNumber={90}/>
      <Pokemon pokemonNumber={45}/>
    </div>

  </React.StrictMode>
);

