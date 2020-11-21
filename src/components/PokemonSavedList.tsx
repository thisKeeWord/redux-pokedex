import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { getSavedPokemon } from "../actions";

const PokemonSavedList: FunctionComponent = (props: any) => {
	const onEntryClick = (name: string): void => {
		const pokemon = props.pokemon.find((pokemon: any) => pokemon.name === name);
		props.dispatch(getSavedPokemon(pokemon));
	};

	return (
		<div className="pokemon-list">
			<span className="error">{props.error}</span>
			{props.pokemon.length > 0 && (
				<>
					<span>Searched Pokemon</span>
					<ul>
						{props.pokemon.map((pokemon: any, index: number) => (
							<li key={index} onClick={() => onEntryClick(pokemon.name)}>
								{pokemon.name}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	...state,
});

export default connect(mapStateToProps)(PokemonSavedList);
