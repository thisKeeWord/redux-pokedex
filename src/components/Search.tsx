import React, { FormEvent, FunctionComponent } from "react";
import { connect } from "react-redux";

const Search: FunctionComponent = ({ dispatch, pokemonSaved }: any) => {
	let input: any;

	// TODO: API call requires thunks
	// Call it a day after getting thunk step down
	const fetchEntry = (value: any) => console.log(value);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!input.value.trim()) {
			return;
		}
		fetchEntry(input.value);
		input.value = "";
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				ref={(node) => {
					input = node;
				}}
			/>
			<button type="submit">Add Todo</button>
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
