import { test, describe, expect } from "vitest";
import idFromUrl from "./pokemon";

describe("test idFromUrl", () => {
  test("returns a id from url", () => {
    const id = idFromUrl("https://pokeapi.co/api/v2/pokemon/25/");
    expect(id).toBe(25);
  });
  test("returns a id from url if backslash is missin from the end", () => {
    const id = idFromUrl("https://pokeapi.co/api/v2/pokemon/25");
    expect(id).toBe(25);
  });
  test("throws an error if not given a id", () => {
    expect(() => idFromUrl("https://pokeapi.co/api/v2/pokemon/")).toThrow();
  });
});
