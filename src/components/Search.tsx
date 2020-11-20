import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../actions";

const Search: FunctionComponent = ({ dispatch, pokemonSaved }: any) => {
	let input: any;

	// TODO: API call requires thunks
	// Call it a day after getting thunk step down
	const fetchEntry = (value: any) => dispatch(fetchCharacters(value));

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				fetchEntry(input.value);
				input.value = "";
			}}
		>
			<input
				ref={(node) => {
					input = node;
				}}
			/>
			<button type="submit">Find Pokemon</button>
		</form>
	);
};

const mapStateToProps = (state: any) => ({
	pokemonSaved: state.pokemon,
});

export default connect(mapStateToProps)(Search);

// mapStateToProps to get Pokemon from state
// in onSubmit handler, check for Pokemon in the state
// * if pokemon exists in state, return that
// * else make fetchEntry call
// useDispatch hook
// useSelector
