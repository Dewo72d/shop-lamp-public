const basketReducer = (
	state = {
		products: [],
		amountOnProductPage: 0,
		amount: 0,
		counter: 1,
	},
	action
) => {
	switch (action.type) {
		case "ADD":
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case "REMOVE":
			return {
				...state,
				products: [
					...state.products.filter(function (obj) {
						return obj.id !== action.payload.id;
					}),
				],
			};
		case "WIPE":
			return {
				...state,
				products: [],
			};

		case "TOTAL":
			return {
				...state,
				amountOnProductPage: action.payload,
			};
		case "AMOUNT":
			return {
				...state,
				amount: action.payload,
			};
		case "COUNTER":
			return {
				...state,
				counter: action.payload,
			};
		default:
			return { ...state };
	}
};

export default basketReducer;
