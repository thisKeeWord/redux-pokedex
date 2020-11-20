import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

const PokemonSavedList: FunctionComponent = (props: any) => {
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

const mapStateToProps = (state: any) => ({
	...state,
});

export default connect(mapStateToProps)(PokemonSavedList);
