import {
	FETCH_POKEMON,
	FETCHING_POKEMON,
	ERROR,
	SELECT_POKEMON,
} from "../actions";

const initialState = {
	pokemon: [],
	fetching: false,
	fetched: false,
	error: null,
	selectedPokemon: {},
};

export const pokemonReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_POKEMON:
			return Object.assign({}, state, {
				pokemon: [...state.pokemon, action.payload],
				fetching: false,
				error: null,
				selectedPokemon: action.payload,
			});

		case SELECT_POKEMON:
			return Object.assign({}, state, {
				selectedPokemon: action.payload,
			});

		case FETCHING_POKEMON:
			return Object.assign({}, state, { fetching: true, error: null });

		case ERROR:
			return Object.assign({}, state, { error: "Pokemon not found" });

		default:
			return state;
	}
};
