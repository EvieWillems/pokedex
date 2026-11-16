import PokemonGrid from "./PokemonGrid";
import ResultCount from "./ResultCount";

const pokemonArray = [
    {
        name:"bulbasaur",
        id:1
    },
    {
        name:"charmander",
        id:4
    },
    {
        name:"squirtle",
        id:7
    }
]


export default function Pokedex () {
    return (
        <section>
            <PokemonGrid list={pokemonArray}/>
            <ResultCount pokemonList={pokemonArray}/>
        </section>
    )
}