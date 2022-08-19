import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


const PokemonChoose = ({changeBoolean}) =>{
    let pokedex = []
    for(let i = 1; i <=802; i++) {
        pokedex[i-1] = i
    }
  return (
      <DropdownButton
        // bsStyle="default"
        // bsSize="small"
        // style={{ maxHeight: "28px" }}
        // title={"Qty"}
        // key={1}
        // id="dropdown-size-small"
      >
        <Dropdown.Item eventKey="1" onClick={changeBoolean}>eevee</Dropdown.Item>
      </DropdownButton>
    )
}

export default PokemonChoose;