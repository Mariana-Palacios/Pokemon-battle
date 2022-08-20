import React, {useState, useEffect} from 'react';
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Loading from '../Loading'

const PokemonChoose = ({changeBoolean}) =>{
    // let pokedex = []
    // for(let i = 1; i <=802; i++) {
    //     pokedex[i-1] = i
    // }
    // const [apiValue, setApiValue] = useState([])
    // const [loading, setLoading] = useState(true)
    // const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    // const fetchApi = async () =>{
    //   setLoading(true)
    //   try{
    //     const response = await fetch(url)
    //     const responseJSON = await response.json()
    //     setApiValue(responseJSON)
    //     setLoading(false)
    //   }catch(error){
    //     setLoading(true) 
    //   }
    // }
    // useEffect(()=>{
    //   fetchApi()
    // }, [])
    // if(loading){
    //   return(
    //     <Loading/>
    //   )
    // }
    // else{
      return (
          <DropdownButton
            // bsStyle="default"
            // bsSize="small"
            // style={{ maxHeight: "28px" }}
            // title={"Qty"}
            // key={1}
            // id="dropdown-size-small"
          >
            {/* {pokedex.map((pokemon,i)=>{
              <Dropdown.Item eventKey={i} onClick={changeBoolean}>
                <img src={apiValue['sprites']['versions']['generation-v']['black-white']['animated']['front_default']?apiValue['sprites']['versions']['generation-v']['black-white']['animated']['front_default']:apiValue['sprites']['versions']['generation-v']['black-white']['front_default']} alt={apiValue['forms'][0]['name']}/>
              </Dropdown.Item>
            })} */}
            <Dropdown.Item onClick={changeBoolean}>eevee</Dropdown.Item>
          </DropdownButton>
        )
    }
}

export default PokemonChoose;