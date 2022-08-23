import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Pokemon from './Pokemon'

const PokemonChoose = ({changeBoolean}) =>{
    let pokedex = []
    for(let i = 1; i <=150; i++) {
        pokedex[i-1] = i
    }
    return (
        <div>
          <DropdownButton
            bsStyle="default"
            bsSize="small"
            style={{ maxHeight: "28px" }}
            title={"Pokemon"}
            key={1}
            id="dropdown-size-small"
          >
            {pokedex.map((pokemon,i)=>{
              return(
                <Dropdown.Item onClick={changeBoolean}>
                  <Pokemon changeBoolean={changeBoolean} name={pokemon} option={false} />
                </Dropdown.Item>
              )
            })}
          </DropdownButton>
        </div>
      )
    }

export default PokemonChoose;