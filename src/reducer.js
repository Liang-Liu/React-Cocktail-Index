const reducer = (state, action) => {
	switch (action.type) {
		case "data loading":
			return { ...state, loading: true };
		case "data loaded":
			return { data: action.payload.drinks, loading: false };
		default:
			break;
	}
};

export default reducer;
