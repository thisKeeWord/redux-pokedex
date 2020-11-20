import React from "react";
import Search from "./components/Search";
import PokemonSavedList from "./components/PokemonSavedList";
import Pokemon from "./components/Pokemon";

import "./App.css";

const App = () => (
	<div>
		<Search />
		<div className="pokemon">
			<PokemonSavedList />
			<Pokemon />
		</div>
	</div>
);

export default App;
