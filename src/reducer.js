import React from "react";



const reducer = (state, action) => {
	switch (action.type) {
		case "data loading":
			return { ...state, loading: true };
			break;
		case "data loaded":
			return { data: action.payload.drinks, loading: false };
			break;
		default:
			break;
	}
};

export default reducer;
