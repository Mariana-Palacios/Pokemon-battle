import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pokemon:[
        {
            id:1,
            pokedexNumber: null,
            name: null,
            type: null,
            sprite: null,
        },
        {
            id:2,
            pokedexNumber: null,
            name: null,
            type: null,
            sprite: null,
        },
        {
            id:3,
            pokedexNumber: null,
            name: null,
            type: null,
            sprite: null,
        },
        {
            id:4,
            pokedexNumber: null,
            name: null,
            type: null,
            sprite: null,
        },
        {
            id:5,
            pokedexNumber: null,
            name: null,
            type: null,
            sprite: null,
        },
        {
            id:6,
            pokedexNumber: null,
            name: null,
            type: null,
            sprite: null,
        }
    ],
    generation: 150,
}

const pokemonTeamSlice = createSlice({
    name: 'pokemonTeam',
    initialState,
    reducers:{
        addPokemonInTeam: (state,action) =>{
            const { id, pokedexNumber, name, type, sprite} = action.payload;
            const foundPokemonPosition = state.pokemonTeam.find((pokemon) => pokemon.id === id);
            if (foundPokemonPosition) {
                foundPokemonPosition.pokedexNumber = pokedexNumber
                foundPokemonPosition.name = name
                foundPokemonPosition.type = type
                foundPokemonPosition.sprite = sprite
            }
        },
        deletePokemonInTeam: (state,action) =>{
            const { id } = action.payload;
            const foundPokemonPosition = state.pokemonTeam.find((pokemon) => pokemon.id === id);
            if (foundPokemonPosition) {
                foundPokemonPosition.pokedexNumber = null
                foundPokemonPosition.name = null
                foundPokemonPosition.type = null
                foundPokemonPosition.sprite = null
            }
        },
        changeGeneration: (state,action) =>{
            state.generation = action.payload
        }
    }
})

export const { addPokemonInTeam, deletePokemonInTeam, changeGeneration } = pokemonTeamSlice.actions
export default pokemonTeamSlice.reducer