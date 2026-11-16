export default function idFromUrl(url: string): number {
  const urlArray = url.split("/");
  const id = Number(urlArray.at(-1))
    ? Number(urlArray.at(-1))
    : Number(urlArray.at(-2));
  if (!id) {
    throw new Error("id missing");
  }
  //   const id = Number(urlArray.at(-2));
  return id;
}

// https://pokeapi.co/api/v2/pokemon/25/
