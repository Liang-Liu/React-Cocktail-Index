import React, { useState } from "react";
import { useGlobalContextHook } from "../context";

const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { getCocktailBySearch } = useGlobalContextHook();

	function handleSubmit(e) {
		e.preventDefault();
		getCocktailBySearch(searchTerm);
		setSearchTerm("");
	}
	return (
		<div>
			<form className="d-flex" onSubmit={handleSubmit}>
				<input
					className="form-control me-2 text-center rounded-pill"
					type="search"
					placeholder="Search..."
					aria-label="Search"
					name="search"
					id="search"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						getCocktailBySearch(e.target.value);
					}}
				/>
			</form>
		</div>
	);
};

export default SearchForm;
