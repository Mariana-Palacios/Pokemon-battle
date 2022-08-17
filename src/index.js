import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import PokemonCore from './components/Pokemon/PokemonCore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

function Main() {
  return (
    <div>
      <Nav/>
      <PokemonCore/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
