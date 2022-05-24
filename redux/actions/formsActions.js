export const showCart = (payload) => (dispath) => {
	dispath({
		type: "SHOW_CART",
		payload: payload,
	});
};

export const showSideNav = (payload) => (dispath) => {
	dispath({
		type: "SHOW_SIDE_NAV",
		payload: payload,
	});
};