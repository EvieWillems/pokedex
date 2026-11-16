
import {test,describe,expect} from "vitest"
import {render,screen} from "@testing-library/react"
import PokemonCard from "./PokemonCard"



describe("test PokemonCard", () => {
    test("renders name, number, and image", () => {
        render(<PokemonCard name="squirtle" id={7}/>)
        expect(screen.getByRole("listitem",{name:"PokemonCard for squirtle"})).toBeInTheDocument()
    })
})