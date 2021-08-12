import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
	const [loading, setLoading] = useState(false);
	const [info, setInfo] = useState({});
	const { id } = useParams();
	console.log(useParams());

	async function getCocktailById(id) {
		setLoading(true);
		const res = await fetch(url + id);
		const resJson = await res.json();
		console.log(resJson);
		setInfo(resJson.drinks[0]);
		setLoading(false);
	}

	useEffect(() => {
		getCocktailById(id);
	}, []);

	const {
		idDrink,
		strDrink,
		strCategory,
		strDrinkThumb,
		strGlass,
		strInstructions,
	} = info;
	console.log(info);

	if (loading) {
		return <Loading />;
	}

	return (
		<div
			className="container-fluid d-md-flex justify-content-center position-relative"
			id="cocktail-details"
		>
			<Link to="/">
				<button className="position-absolute top-0 end-0 border-0 fs-3 iconBtn rounded me-2 px-2">
					<i class="fas fa-arrow-left"></i>
				</button>
			</Link>
			<div className="img-container">
				<img className="p-5 img-fluid" src={strDrinkThumb} alt={strDrink} />
			</div>
			<div className="d-flex flex-column" id="cocktail-detail-text">
				<h1>{strDrink}</h1>
				<h4>{strGlass}</h4>
				<p>{strInstructions}</p>
			</div>
		</div>
	);
};

export default SingleCocktail;
