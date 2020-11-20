import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../actions";

const Search: FunctionComponent = ({ pokemon, dispatch }: any) => {
	console.log(pokemon, "pokemon");
	let input: any;

	const fetchEntry = (value: any): void => {
		const pokemonSaved = pokemon.find(
			({ id, name }: any) => id.toString() === value || name === value
		);
		if (!pokemonSaved) {
			dispatch(fetchCharacters(value));
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				fetchEntry(input.value.toLowerCase());
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
	...state,
});

export default connect(mapStateToProps)(Search);

// mapStateToProps to get Pokemon from state
// in onSubmit handler, check for Pokemon in the state
// * if pokemon exists in state, return that
// * else make fetchEntry call
// useDispatch hook
// useSelector
