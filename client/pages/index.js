// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/index.css'
// import Nav from './components/Nav/Nav'
// import PokemonCore from './components/Pokemon/PokemonCore';
// import Generation from './components/Pokemon/Generation';
import LandingPage from './components/LandingPage/LandingPage';



const HomePage = () => {
  return (
    <div >
      <LandingPage/>
      {/* <Nav/>
      <Generation/>
      <div className='flex flex-j-c flex-f-w'>
        <PokemonCore/>
        <PokemonCore/>
        <PokemonCore/>
        <PokemonCore/>
        <PokemonCore/>
        <PokemonCore/>
      </div> */}
    </div>
  )
}


export default HomePage
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Main />);
