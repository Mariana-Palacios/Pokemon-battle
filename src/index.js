import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import PokemonCore from './components/Pokemon/PokemonCore';
import './styles/index.css'

function Main() {
  return (
    <>
      <Nav/>
      <PokemonCore/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
