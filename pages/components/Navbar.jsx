import Image from "next/image";
import Logo from "../../public/logo.png";
import pages from "../assets/navbarButtons.json";
import Cart from "./Cart";
import CartNav from "./CartNav";
//Helper
import pushLink from "../../helper/pushLink";
//React Redux
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../../redux/actions/formsActions";
import { counterClick } from "../../redux/actions/basketActions";

export default function Navbar(prop) {
	const dispatch = useDispatch();
	const router = useRouter();
	const showCartValue = useSelector((state) => state.fromsReducer.showCart);
	const productsInBasket = useSelector(
		(state) => state.basketReducer.products
	);
	const productLength = () => productsInBasket.length === 0;
	return (
		<div className="flex flex-col z-50 ">
			<nav className=" bg-black  xl:pb-2 pt-2 ">
				<ul className="flex  justify-center ">
					<Image alt="logo" width={35} height={35} src={Logo} />
					{pages[prop.language].map((item) => (
						<li
							className={item.style}
							key={item.id}
							onClick={(e) => {
                                dispatch(counterClick(1))
                                pushLink(e, item.href, router)
                            }}
						>
							<a>{item.value}</a>
						</li>
					))}
					<li key={"cartNav"}>
						<CartNav />
					</li>
				</ul>
			</nav>

			<div
				className={`${
					showCartValue ? "block transition" : "hidden"
				}   self-center absolute z-50 w-full min-h-screen bg-opacity-90  bg-nav shadow-lg  flex flex-col justify-center items-center pb-96  `}
			>
				{/*ЗАМЕТКА: h-screen */}
				<div
					className={`scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 text-lightBlack h-screen  ${
						productLength() ? "w-full" : "w-10/12 p-12"
					}`}
				>
					<div
						className={`bg-whiteLight border rounded-md m-6  ${
							productLength() ? "h-1/4 mt-32" : " "
						}`}
					>
						<svg
							onClick={() => dispatch(showCart(!showCartValue))}
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 cursor-pointer"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
						<div>
							<Cart />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
