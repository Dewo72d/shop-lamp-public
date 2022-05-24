export default function accessoriesCheck(target, item, state) {
	const check = state.product.accessories.find((elem) => elem.id === item.id);
	if (typeof check !== "undefined") {
		let changeStyle = target.className.replace(
			" border-blue-600 -translate-y-1",
			" "
		);
		target.className = changeStyle;

		return state.set({
			...state.product,
			accessories: state.product.accessories.filter(
				(elem) => elem.id !== item.id
			),
		});
	} else {
		target.className += "  border-blue-600 -translate-y-1";
		return state.set({
			...state.product,
			accessories: [
				...state.product.accessories,
				{ id: item.id, name: item.name, price: item.price },
			],
		});
	}
}
