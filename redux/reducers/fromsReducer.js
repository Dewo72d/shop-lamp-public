const fromsReducer = (
	state = {
		showCart: false,
        showSideNav: false
	},
	action
) => {
	switch (action.type) {
		case "SHOW_CART":
			return {
				...state,
				showCart: action.payload,
			};
		case "SHOW_SIDE_NAV":
			return {
				...state,
				showSideNav: action.payload,
			};
		default:
			return { ...state };
	}
};

export default fromsReducer;
