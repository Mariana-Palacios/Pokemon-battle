import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import Nav from './components/Nav'
import PokemonCore from './components/Pokemon/PokemonCore';

const Main = () => {
  return (
    <div>
      <Nav/>
      <div className='flex flex-j-c'>
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
