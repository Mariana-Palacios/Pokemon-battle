import React, {useState, useEffect} from 'react';
import PokemonChoose from './PokemonChoose';
import PokemonInformation from './PokemonInformation';
import Loading from '../Loading';

const Pokemon =()=>{
  const [apiValue, setApiValue] = useState([])
  const [loading, setLoading] = useState(true)
  const [name,setName] = useState("")
  const [view, setView] = useState(true)
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const changeBoolean = (e) =>{
    setView(!view)
    if(name!==""){
      setName("")
    }
    setName(e.target.textContent)
  }
  const fetchApi = async () =>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const responseJSON = await response.json()
      setApiValue(responseJSON)
      setLoading(false)
      console.log(apiValue)
    }catch(error){
      setLoading(true) 
    }
  }
  useEffect(()=>{
    fetchApi()
  }, [])
  if(loading){
    return(
      <Loading/>
    )
  }else{
    return(
      <div>
        {view?<PokemonChoose changeBoolean={changeBoolean}/>:(name==="")?<Loading/>:<PokemonInformation changeBoolean={changeBoolean} apiValue={apiValue}/>}
        {console.log(url)}
      </div>
    )
  }
}

export default Pokemon;
