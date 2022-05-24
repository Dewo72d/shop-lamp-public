//Redux & React
import { useDispatch } from "react-redux";
import { removeProduct, totalAmount } from "../../redux/actions/basketActions";
import { showCart } from "../../redux/actions/formsActions";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
//Helper
import sumator from "../../helper/sumator";
import checkCarrence from "../../helper/checkCarrence";
import pushLink from "../../helper/pushLink";
import imgLoader from "../../helper/imgLoader";
//Translate
import cart from "../assets/cart.json";
import cartOutText from "../assets/cartOutText.json";

export default function Cart() {
	const router = useRouter();
	const productsInBasket = useSelector(
		(state) => state.basketReducer.products
	);
	const [lang, setLang] = useState(router.locale);
	//При добавлении пачки товаров должен быть скрол
	const dispatch = useDispatch();
	const [currency, setCurrency] = useState("");
	const [amount, setAmount] = useState(0);

	useEffect(() => {
		setCurrency(checkCarrence(lang));
		//(цена продукта + сумма акссесуаров) * количество
		const sum = productsInBasket
			.map(
				(item) =>
					(sumator(item.accessories, "price") + item.price) *
					item.count
			)
			.reduce((total, num) => total + num, 0);
		setAmount(sum);
		dispatch(totalAmount(sum));
	}, [productsInBasket]);

	if (productsInBasket.length !== 0) {
		return (
			<div className="flex flex-col justify-center z-30 w-full pt-8 p-4 md:p-24 md:pt-6">
				<p className="text-3xl font-semibold tracking-normal pb-8">
					{cartOutText[lang].review}
				</p>
				{cart[lang].map((cartItem, key) => (
					<div key={key + "Item"}>
						<div className="">
							<ul className="flex flex-col  justify-center  space-y-4 ">
								{productsInBasket.map((item, key) => (
									<li key={key + "Prod"}>
										<div className="p-2 flex justify-center md:justify-between ">
											<div className="flex  flex-col space-y-0.5 pr-2 pl-2 w-full">
												<div className="flex flex-col md:flex-row justify-center   ">
													<div className="place-content-center flex pb-2">
														<Image
															className="rounded-lg  "
															alt="Load..."
															src={`../products/${item.name}.png`}
															loader={imgLoader}
															width={150}
															height={150}
														/>
													</div>
													<div className="flex flex-col  md:justify-between w-full">
														<div className="grid md:block">
															<div className="text-2xl font-semibold tracking-normal pb-2 place-content-center md:justify-start flex">
																{item.name}
															</div>
															<div className="flex flex-row  justify-between ">
																<div className="flex  flex-col justify-center pt-1 ">
																	<div className="flex ">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			className="h-5 w-6"
																			fill="none"
																			viewBox="0 0 24 24"
																			stroke="currentColor"
																		>
																			<path
																				strokeLinecap="round"
																				strokeLinejoin="round"
																				strokeWidth={
																					2
																				}
																				d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
																			/>
																		</svg>
																		:{" "}
																		{
																			item.count
																		}
																	</div>
																</div>
																<div className="text-2xl  tracking-normal">
																	{(sumator(
																		item.accessories,
																		"price"
																	) +
																		item.price) *
																		item.count +
																		currency}
																</div>
															</div>
															<div
																className="grid  place-items-end text-blue hover:text-blueLight cursor-pointer pt-4 pb-2"
																onClick={() =>
																	dispatch(
																		removeProduct(
																			{
																				id: item.id,
																			}
																		)
																	)
																}
															>
																{
																	cartItem.remove
																}
															</div>
														</div>
													</div>
												</div>
												<ul>
													{/*Accessories*/}
													{item.accessories.map(
														(acc, index) => (
															<li
																key={
																	index +
																	"Acc"
																}
																className="flex justify-between p-2"
															>
																<div className=" ">
																	<h1 className="text-2xl">
																		{
																			acc.name
																		}
																	</h1>
																</div>
																<div>
																	{acc.price +
																		currency}
																</div>
															</li>
														)
													)}
												</ul>
												<div className="w-full">
													<hr />
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>

							<div className="flex justify-between  pt-8 ">
								<div className="text-2xl font-semibold  ">
									<div className="pt-5">
										{cartItem.sum + amount}грн
									</div>
								</div>
								<div className=" text-white">
									<button
										onClick={(e) => {
											dispatch(showCart(false));
											pushLink(e, "/buy", router);
										}}
										className="border  cursor-pointer bg-blue hover:bg-blueLight rounded p-4 lg:p-2 m-2 w-full"
									>
										{cartItem.btn}
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	} else
		return (
			<div className="grid grid-rows-3 justify-items-center pb-4 cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 row-start-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
		);
}
