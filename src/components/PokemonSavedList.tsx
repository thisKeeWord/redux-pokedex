import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";

const PokemonSavedList: FunctionComponent = (
	store,
	{ state, pokemonSaved, onTodoClick }: any
) => {
	console.log(store, "props", state, "asdf", pokemonSaved);
	return (
		<ul>
			{pokemonSaved &&
				pokemonSaved.map((pokemon: any) => <li>{pokemon.name}</li>)}
		</ul>
	);
};

const mapStateToProps = (state: any) => ({
	pokemonSaved: state.pokemon,
});

export default connect(mapStateToProps)(PokemonSavedList);
