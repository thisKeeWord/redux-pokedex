import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";

const PokemonSavedList: FunctionComponent = (props: any) => {
	console.log(props.pokemon, "props");
	return (
		<>
			<ul>
				{props.pokemon.map((pokemon: any, index: number) => (
					<li key={index}>{pokemon.name}</li>
				))}
			</ul>
			{props.error}
		</>
	);
};

const mapStateToProps = (state: any) => {
	console.log(state, "state");
	return { ...state };
};

export default connect(mapStateToProps)(PokemonSavedList);
