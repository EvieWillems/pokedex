import Pokedex from "../components/Pokedex";

export default function PokedexPage (props:{url:string}) {
    return (
        <Pokedex url={props.url}/>

    )
}