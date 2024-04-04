import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon, PokemonSpecies } from "pokenode-ts";
import usePokeApi, { getLocalizedName, resolveResources } from "src/hooks/usePokeApi";
import { globalContext } from "../store/GlobalStore";

import SearchPokemon from "./SearchPokemon";

interface PokemonProps {
  pokemon: Pokemon;
}

function Pokemon({ pokemon }: PokemonProps, ) {
	const { dispatch } = useContext(globalContext)
	const navigate = useNavigate()
  const { data: species } = usePokeApi((api) => api.utility.getResourceByUrl<PokemonSpecies>(pokemon.species.url));

  const getPokemonDetails = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, data: object) => {
    e.preventDefault();
    dispatch({ type: 'POKEMON_DETAILS', payload: data })
    return navigate('/details')
  }

  return species ? (
    <tr onClick={(event) => getPokemonDetails(event, pokemon)}>
      <td width="1">
        <img
          src={pokemon.sprites.other?.["official-artwork"].front_default ?? "src/assets/pokeball.png"}
          style={{
            height: "3em",
          }}
        />
      </td>
      <td>{getLocalizedName(species)}</td>
    </tr>
  ) : (
    <tr>
      <td width="1">
        <img
          src={"src/assets/pokeball.png"}
          style={{
            height: "3em",
          }}
        />
      </td>
      <td></td>
    </tr>
  );
}

function PokemonList() {
  const { data: pokemon } = usePokeApi((api) => api.pokemon.listPokemons(0, 10).then(resolveResources<Pokemon>));

  if (!pokemon) return <div>Chargement ...</div>;

  return (
    <>
      <SearchPokemon />
      <table border={1} style={{ background: "white", color: "blue", width: 800 }}>
        <tbody>
          {pokemon.results.map((p) => (
            <Pokemon key={p.id} pokemon={p} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PokemonList;
