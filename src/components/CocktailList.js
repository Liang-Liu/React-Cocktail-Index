import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContextHook } from "../context";

const CocktailList = () => {
	const { state } = useGlobalContextHook();
	const { data } = state;

	return (
		<div className="container py-5">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				{data && data.map((ele) => <Cocktail key={ele.idDrink} info={ele} />)}
			</div>
		</div>
	);
};

export default CocktailList;
