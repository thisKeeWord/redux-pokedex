import { FETCH_POKEMON, FETCHING_POKEMON, ERROR } from "../actions";

const initialState = {
	pokemon: [],
	fetching: false,
	fetched: false,
	error: null,
};

export const pokemonReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_POKEMON:
			return Object.assign({}, state, {
				pokemon: state.pokemon.concat(action.payload),
				fetching: false,
			});

		case FETCHING_POKEMON:
			return Object.assign({}, state, { fetching: true });

		case ERROR:
			return Object.assign({}, state, { error: action.payload });

		default:
			return state;
	}
};
