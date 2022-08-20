import React, {useState, useEffect} from 'react';
import Loading from '../Loading'
import { TbPokeball } from 'react-icons/tb';

const Pokemon =({name,changeBoolean})=>{
  const [apiValue, setApiValue] = useState([])
  const [loading, setLoading] = useState(true)
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const fetchApi = async () =>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const responseJSON = await response.json()
      setApiValue(responseJSON)
      setLoading(false)
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
  } else{
    return(
      <div className="pokemon flex flex-j-c flex-f-d-c flex-a-i">
        <img src={apiValue['sprites']['versions']['generation-v']['black-white']['animated']['front_default']?apiValue['sprites']['versions']['generation-v']['black-white']['animated']['front_default']:apiValue['sprites']['versions']['generation-v']['black-white']['front_default']} alt={apiValue['forms'][0]['name']}/>
        {/* <h3>N.°{}</h3> */}
        <h1><TbPokeball/>{apiValue['forms'][0]['name']}</h1>
        <div className='flex flex-f-w'>
        {apiValue['types'].map((type, i) => <p className='type'>{apiValue['types'][i]['type']['name']}</p>)}
        </div>
        <button onClick={changeBoolean}>change</button>
      </div>
    )
  }
}

export default Pokemon;
