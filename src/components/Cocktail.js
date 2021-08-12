import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ info }) => {
	const {
		idDrink,
		strDrink,
		strCategory,
		strDrinkThumb,
		strGlass,
		strInstructions,
	} = info;

	return (
		<div className="col d-flex justify-content-center">
			<div className="card border-0 rounded-0 container-card">
				<Link to={`/cocktail/${idDrink}`}>
					<div className="img-container">
						<img
							className="card-img-top, card-img"
							src={strDrinkThumb}
							alt={strDrink}
						/>
					</div>
					<article class="text-left">
						<h2>{strDrink}</h2>
						<h4>{strGlass}</h4>
					</article>
				</Link>
			</div>
		</div>
	);
};

export default Cocktail;
