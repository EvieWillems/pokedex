

function ResultCount(props:{pokemonList:any[]}) {
    return (
        <h3>
            {"Showing " + props.pokemonList.length +" Pokemon of 151"}
        </h3>
    )
}

export default ResultCount