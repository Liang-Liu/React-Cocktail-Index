import reducer from "./reducer";
import React, { useContext, useReducer, useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const GlobalContext = React.createContext("");

export function useGlobalContextHook() {
	return useContext(GlobalContext);
}

const initialState = {
	searchTerm: "",
	data: [],
	loading: false,
};

const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	async function getCocktailBySearch(searchTerm = "") {
		dispatch({ type: "data loading" });

		const res = await fetch(url + searchTerm);
		const resJson = await res.json();

		dispatch({ type: "data loaded", payload: resJson });
	}
	useEffect(() => {
		getCocktailBySearch();
	}, []);


	return (
		<GlobalContext.Provider value={{ state, dispatch, getCocktailBySearch }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
