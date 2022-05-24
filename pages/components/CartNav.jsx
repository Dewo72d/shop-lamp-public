//React/Redux
import { showCart } from "../../redux/actions/formsActions";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
//helper
import pushLink from "../../helper/pushLink";

export default function CartNav() {
	//Hooks
	const dispatch = useDispatch();
	const router = useRouter();

	//States
	//const showCartValue = useSelector((state) => state.fromsReducer.showCart);
	const productsInBasket = useSelector(
		(state) => state.basketReducer.products
	);

	const productLength = () => productsInBasket.length === 0;
	return (
		<div
			className={`cursor-pointer nav-btn `}
			onClick={(e) => pushLink(e, "/cart", router)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={`h-6 w-6  ${
					productLength() ? "" : "animate-pulse  bg-gradient-to-br "
				}`}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
		</div>
	);
}
