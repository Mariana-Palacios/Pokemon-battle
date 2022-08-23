import Sound from '../Sound'
import { SiPokemon } from "react-icons/si";

const Nav = () => {
    return (
      // <nav className="nav flex flex-j-s-b">
      <nav className="nav flex flex-j-s-b">
        <SiPokemon className="icon"/>
        <Sound change={true}/>
      </nav>
    );
  }
  
export default Nav;