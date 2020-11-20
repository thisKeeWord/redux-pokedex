import React, { FunctionComponent } from "react";

const PokemonSavedList: FunctionComponent = ({ state, onTodoClick }: any) => (
	<ul>
		{state.pokemon.map((pokemon: any) => (
			<li>{pokemon.name}</li>
		))}
	</ul>
);

export default PokemonSavedList;
