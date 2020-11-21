import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../actions";

const Search: FunctionComponent = ({ pokemon, dispatch }: any) => {
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
			className="search"
			onSubmit={(e) => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				fetchEntry(input.value.toLowerCase());
			}}
		>
			<h4>Pokemon</h4>
			<input
				className="input"
				ref={(node) => {
					input = node;
				}}
			/>
			<button className="submit" type="submit">
				Search
			</button>
		</form>
	);
};

const mapStateToProps = (state: any) => ({
	...state,
});

export default connect(mapStateToProps)(Search);
