import { getPokemon } from "../api/pokemon";
import PokemonCard from "./PokemonCard";
import usePokemon from "../hooks/usePokemon";




export default function SinglePokemon (props:{id:number}) {

    const id = props.id 
    const result = usePokemon(id)
    if (result.status === "success") {
        return (
            <>
                <PokemonCard id = {id} name = {result.pokemonResult.name}/>
            </>
        )
    } //else {console.log(result.status)}
    
    
}