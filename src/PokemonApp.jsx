import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  console.log(pokemons, "pokemons");
  return (
    <div>
      <h2>Pokemons</h2>
      <hr />
      <br />
      <span>Loading: {isLoading ? "true" : "false"}</span>
      <br />
      <hr />
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(getPokemons(page))}>Actualizar</button>
    </div>
  );
};

export default PokemonApp;
