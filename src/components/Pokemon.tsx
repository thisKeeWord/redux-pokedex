import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

const keys = ["forms", "abilities", "stats", "moves", "id", "types", "sprites"];

const Pokemon: FunctionComponent = (props: any) => {
	let pokemonImg;
	// eslint-disable-next-line
	let description = Object.keys(props.selectedPokemon).map((key, value) => {
		if (props.selectedPokemon[key] && keys.includes(key.toLowerCase())) {
			if (Array.isArray(props.selectedPokemon[key])) {
				return (
					<div className="descriptor">
						<div className="key">
							<h4>{key}</h4>
							{/* eslint-disable-next-line */}
							{props.selectedPokemon[key].map((elem: any, index: number) => {
								const isSameKey =
									index === props.selectedPokemon[key].length - 1;

								if (elem.move) {
									return (
										<span className="key">
											{elem.move.name.replace(/-/g, " ")}
											{!isSameKey && ", "}
										</span>
									);
								}
								if (elem.name) {
									return (
										<span className="key">
											{elem.name}
											{!isSameKey && ", "}
										</span>
									);
								}
								if (elem.ability) {
									return (
										<span className="key">
											{elem.ability.name}
											{!isSameKey && ", "}
										</span>
									);
								}
								if (elem.stat) {
									return (
										<span className="key">
											{elem.stat.name} : {elem.base_stat}
											<br />
										</span>
									);
								}
								if (elem.type) {
									return (
										<span className="key">
											{elem.type.name.replace(/-/g, " ")}
											{!isSameKey && ", "}
										</span>
									);
								}
							})}
						</div>
					</div>
				);
			} else if (key === "sprites") {
				pokemonImg = (
					<img
						alt="Pokemon"
						src={props.selectedPokemon[key].front_default}
					></img>
				);
			} else {
				return (
					<div className="descriptor">
						<h4>{key.replace(/_/g, " ")}</h4>
						<div className="key">{props.selectedPokemon[key].toString()}</div>
					</div>
				);
			}
		}
	});

	return (
		<div className="entry">
			<div>{pokemonImg}</div>
			{description}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	...state,
});

export default connect(mapStateToProps)(Pokemon);
