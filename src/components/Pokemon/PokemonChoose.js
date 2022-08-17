import Dropdown from 'react-bootstrap/Dropdown';

const PokemonChoose = ({onClick}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Pokemon
      </Dropdown.Toggle>

      <Dropdown.Menu onClick={onClick}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PokemonChoose;