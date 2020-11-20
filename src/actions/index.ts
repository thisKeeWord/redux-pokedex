import axios from "axios";
export const FETCH_POKEMON = "FETCH_POKEMON";
export const FETCHING_POKEMON = "FETCHING_POKEMON";
export const SELECT_POKEMON = "SELECT_POKEMON";
export const ERROR = "ERROR";

export const fetchCharacters = (pokemon: string): Function => {
	const getCharacters = axios.get(
		`https://pokeapi.co/api/v2/pokemon/${pokemon}`
	);

	return function (dispatch: Function) {
		dispatch({ type: FETCHING_POKEMON });

		getCharacters
			.then((res) => {
				console.log("Res", res);
				dispatch({ type: FETCH_POKEMON, payload: res.data });
			})

			.catch((error) => {
				dispatch({ type: ERROR, payload: error });
			});
	};
};

export const getSavedPokemon = (savedPokemon: Record<any, any>) => ({
	type: SELECT_POKEMON,
	payload: savedPokemon,
});
