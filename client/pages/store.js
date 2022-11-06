import { configureStore } from '@reduxjs/toolkit'
import pokemonTeamReducer from '../features/pokemonTeam/pokemonTeamSlice'

export default configureStore({
  reducer: {
    pokemon: pokemonTeamReducer
  },
})
