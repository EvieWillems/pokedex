import SinglePokemon from "../components/SinglePokemon";
import { useTeamList } from "../hooks/useTeamList";


export default function TeamPage (props:{url:string}) {
    const result = useTeamList(props.url)

    if (result.teamListState.status === "success") {
    return (
        <ol>
            {result.teamListState.teamResult.map((pokemon)=> <SinglePokemon key={pokemon.pokemon_id} id={pokemon.pokemon_id}/>)}
        </ol>
    )}
}