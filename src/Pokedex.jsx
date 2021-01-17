import { PokemonContextProvider, pokemonInitData } from './contexts/PokemonContext'
import { useReducer } from 'react';

const pokemonStateReducer = (state, { action, params }) => {
    switch(action){
        case "setPokemon":
            const { pokemon } = params.pokemon.results[0];
            return { ...pokemonInitData, mal_id, title, image_url, synopsis};
        default:
            throw new Error('action undefined');
    }
}


export default function Pokedex({children}) {
    const [pokemon, dispatch]  = useReducer(pokemonStateReducer, pokemonInitData);

    return (
        <PokemonContextProvider value={{ pokemon, dispatch }}>
            {children}
        </PokemonContextProvider>
    )
}