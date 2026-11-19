import type{ TeamList } from "../types";
import { useEffect, useState } from "react";
import {getPokemonList} from "../api/pokemon"

type TeamListState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; teamResult: TeamList };

export function useTeamList(url:string) {
  const [teamListState, setTeamListState] = useState<TeamListState>({
    status: "loading",
  });
  const [reloadCount, setReloadCount] = useState(0);
  useEffect(() => {
    let ignore = false
    const loadPokemon = async () => {
      try {
        const response = await getPokemonList({url:url})
        
        if (!ignore && response instanceof Array) { setTeamListState({ status: "success", teamResult: response })};
      } catch (err) {
        if (!ignore) {err instanceof Error && console.log("error:" + err.message);
        setTeamListState({
          status: "error",
          message: "unable to catch any Pokemon",
        })};
      }
    };

    loadPokemon();

    return (() => {
      ignore = true;
    });
  }, [reloadCount]);

  const refetch = () => setReloadCount((count) => count + 1);

  return { teamListState, refetch };
}
