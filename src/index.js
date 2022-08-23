import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import Nav from './components/Nav/Nav'
import PokemonCore from './components/Pokemon/PokemonCore';
import Generation from './components/Pokemon/Generation';
import Sound from './components/Sound'


const Main = () => {
  return (
    <div >
      <Nav/>
      <Sound change={false}/>
      <div className='flex flex-j-c flex-f-w'>
        <PokemonCore/>
        <PokemonCore/>
        <PokemonCore/>
        <PokemonCore/>
        <PokemonCore/>
        <PokemonCore/>
      </div>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
