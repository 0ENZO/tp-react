import { useState } from "react"
import { usePokemonContext } from "./contexts/PokemonContext"
import { fetchPokemon } from "./pokemonApi"

export default function PokemonNameInput(){

    const [input, setInput] = useState('')
    const { dispatch } = usePokemonContext();

    return (
        <input 
            onKeyDown={e => e.key === 'Enter' && fetchPokemon(input, dispatch)}
            onChange={e => setInput(e.target.value)}
        />
    )
}
