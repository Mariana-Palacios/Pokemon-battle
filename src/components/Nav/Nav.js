import Sound from './Sound'
import { SiPokemon } from "react-icons/si";

const Nav = () => {
    return (
      // <nav className="nav flex flex-j-s-b">
      <nav className="nav flex">
        <SiPokemon className="icon"/>
        <Sound/>
      </nav>
    );
  }
  
export default Nav;