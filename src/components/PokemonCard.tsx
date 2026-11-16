
interface PokemonCardProps {
    id:number,
    name:string
}

function makeTitleCase (target:string) {
    const arr:string[] = target.split("")
    arr[0] = arr[0].toUpperCase()
    return arr.join("")
}

export default function PokemonCard (props:PokemonCardProps) {
    const {name, id} = props
    return (
        <li className="pokemon-card" key={id} aria-label={`PokemonCard for ${name}`}>
            <h2>{`${makeTitleCase(name)} \#${id}`}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={`An image of ${name}`}/>
        </li>
    )
}