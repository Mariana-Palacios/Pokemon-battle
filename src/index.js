import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Pokemon from './components/Pokemon/Pokemon';
// import PokemonChoose from './components/Pokemon/PokemonChoose';
// import PokemonInformation from './components/Pokemon/PokemonInformation';
// import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

function Main() {
  // const [name,setName] = useState("")
  // const [view, setView] = useState(true)
  // const changeBoolean = (e) =>{
  //   setView(!view)
  //   setName(e.target.textContent)
  // }
  // let Value = Pokemon(name)
  return (
    <div>
      <Nav/>
      <Pokemon/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
