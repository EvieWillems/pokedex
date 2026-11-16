import type { PokemonListItem } from "../types";
import PokemonCard from "./PokemonCard";


export default function PokemonGrid (props:{list:any[]}) {
    return (
        <ul>
            <h3>Pokemon:</h3>
            {props.list.map((pokemon)=><PokemonCard name={pokemon.name} id={pokemon.id}/>)}
        </ul>
    )
}