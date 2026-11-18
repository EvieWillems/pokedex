export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string; url: string } }[];
  sprites: { front_default: string | null };
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface TeamMember { id: number; pokemon_id: number; pokemon_name: string }
export type NewTeamMember = Omit<TeamMember, "id">;

export interface PokemonResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}