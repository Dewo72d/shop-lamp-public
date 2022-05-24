//React/Redux
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { showCart, showSideNav } from "../../redux/actions/formsActions";
//helper
import pushLink from "../../helper/pushLink";
//Components
import Image from "next/image";
import Logo from "../../public/logo.png";
import pages from "../assets/navbarButtons.json";
import CartNav from "./CartNav";
import Cart from "./Cart";

export default function SideNav(prop) {
	//init Redux
	const router = useRouter();
	const dispatch = useDispatch();
	const showCartValue = useSelector((state) => state.fromsReducer.showCart);
	const showSideNavValue = useSelector(
		(state) => state.fromsReducer.showSideNav
	);
	const productsInBasket = useSelector(
		(state) => state.basketReducer.products
	);

	const productLength = () => productsInBasket.length === 0;

	return (
		<div>
			<div className="z-40 bg-nav flex flex-row justify-between p-2">
				<button
					className="side-btn focus:border-2 text-ghost pl-2"
					onClick={() => dispatch(showSideNav(!showSideNavValue))}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<div className="justify-self-center text-white">Logo</div>
				<div className="justify-self-center">
					<CartNav />
				</div>
			</div>
			<nav className="z-40">
				<div
					className={`z-50
                        ${showSideNavValue ? "" : "-translate-y-full"}
                    sidebar bg-black min-w-full fixed min-h-screen inset-y-0 left-0  transform  transition duration-500 ease-out`}
				>
					<div className="grid grid-cols-3 text-white">
						<div
							className=" pl-4 pt-2"
							onClick={() =>
								dispatch(showSideNav(!showSideNavValue))
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
						<Image alt="logo" src={Logo} />
					</div>
					<ul className="flex flex-col pr-10 pl-10 pt-12 justify-left gap-2 divide-y  text-ghost ">
						{pages[prop.language].map((item) => (
							<li
								className="hover:text-red-400 justify-self-center  w-full "
								key={item.id}
							>
								<div className="pt-2">
									<a
										onClick={(e) => {
											dispatch(showSideNav(false));
											pushLink(e, item.href, router);
										}}
									>
										{item.value}
									</a>
								</div>
							</li>
						))}
					</ul>
				</div>
			</nav>

			<div
				className={`${
					showCartValue ? "" : "-translate-y-full"
				} inset-y-0 transform duration-500 ease-in top-0 self-center fixed z-50 w-full min-h-full h-full bg-opacity-90  bg-nav shadow-lg  flex flex-col justify-center items-center`}
			>
				{/*ЗАМЕТКА: h-screen  ТУТ КОСТЫЛЬ В СТИЛЯХ */}

				<div
					className={`text-lightBlack w-screen scrollbar-thin  ${
						productLength() ? "" : "w-full"
					}`}
				>
					<div
						className={`bg-whiteLight border rounded-md m-6  ${
							productLength() ? "" : " "
						}`}
					>
						<svg
							onClick={() => {
								dispatch(showCart(!showCartValue));
							}}
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
