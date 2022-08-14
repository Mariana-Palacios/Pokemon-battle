import React, {useState, useEffect} from 'react';
import { TbPokeball } from 'react-icons/tb';
import Loading from './Loading';

const Pokemon =(props)=>{
  const {pokemonNumber} = props 
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
  const [apiValue, setApiValue] = useState([])
  const [loading, setLoading] = useState(true)
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
  }else{
    return(
      <div className="pokemon flex flex-j-c flex-f-d-c flex-a-i">
        <img src={apiValue['sprites']['front_default']} alt={apiValue['forms'][0]['name']}/>
        <h3>N.°{pokemonNumber}</h3>
        <h1><TbPokeball/>{apiValue['forms'][0]['name']}</h1>
        <div className='flex flex-f-w'>
          {apiValue['types'].map((type, i) => <p className='type'>{apiValue['types'][i]['type']['name']}</p>)}
        </div>
      </div>
    )
  }
}

export default Pokemon;

// const Pokemon = (props) => {
//     const {name, image, number} = props;
//     return (
//       <div className="App">
//         <img src={image} alt={name}/>
//         <h3>N.°{number}</h3>
//         <h1><TbPokeball/>{name}</h1>
//       </div>
//     );
//   }
  
//   export default Pokemon;