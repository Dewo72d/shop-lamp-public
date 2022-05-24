//react/redux
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, totalSum } from "../../redux/actions/basketActions";
import { useRouter } from "next/router";
//helpers
import defaultValues from "../assets/defaultValues.json";
import popAdd from "../assets/popAdd.json";
import pushLink from "../../helper/pushLink";
//pages
import AccessoriesChooser from "./AccessoriesChooser";
import Counter from "./Counter";

//В отличии от выбора продукта, акссесуары можно выбрать все
//Незабывай сетить дефолтные значения каждому пропсу

export default function Chooser({ items, select }) {
	//destruct
	const { variation, accessories, description, char, cart, buy } = items;
	//Hooks
	const [activeDeviceModel, setActiveDeviceModel] = useState(+select);
	const [toCart, setToCart] = useState(false);
	const [lang, setLang] = useState(useRouter().locale);
	const [sumAcc, setSumAcc] = useState(0); //Отвечает за ссуму акссесуаров
	//Redux Hooks
	const count = useSelector((state) => state.basketReducer.counter);
	const dispatch = useDispatch();
	const router = useRouter();

	//states
	const [product, setProduct] = useState({
		id: 0,
		name: "",
		price: 0,
		accessories: [],
		count: 1,
	});

	//Принимает гет параметр "select" если он есть и сетит его
	useEffect(() => {
		if (select !== null) {
			for (const iterator of variation) {
				iterator.id === +select
					? setProduct({
							id: iterator.id,
							name: iterator.name,
							price: iterator.price,
							count: count,
							accessories: [],
					  })
					: () => {
							setProduct(product);
					  };
			}
		} else {
			setProduct(product);
		}
	}, []);

	useMemo(() => {
		setProduct({
			...product,
			count: count,
		});
	}, [count]);

	//Когда изменяется Count - изменяется Amount
	useEffect(() => {
		dispatch(totalSum((product.price + sumAcc) * count));
	}, [product, count, sumAcc]);

	return (
		<div className="select-none antialiased flex flex-col md:justify-start justify-center gap-4  md:w-4/5 p-8">
			<div className="flex flex-row justify-between">
				<div>
					<h1 className="text-4xl tracking-normal font-semibold">
						{description.header}
					</h1>
				</div>
			</div>
			<h2 className="text-xl font-semibold mb-2" >{description.model}</h2>
			<ul className="choose-ul mb-4  blure-xl  ">
				{variation.map((item) => (
					<li
						className={`border rounded-lg cursor-pointer ${
							activeDeviceModel === item.id
								? "border-blue-600 -translate-y-1 transform duration-500"
								: " transform duration-500"
						}`}
						onClick={(event) => {
							setActiveDeviceModel(item.id);
							setProduct({
								id: item.id,
								name: item.name,
								price: item.price,
								count: count,
								accessories: [...product.accessories],
							});
						}}
						key={item.price}
					>
						<div className="flex flex-row justify-between p-4 ">
							<div className="flex flex-col justify-center">
								<div className="text-preXl font-semibold text-lightBlack tracking-wide">
									<h1 className="">{item.name}</h1>
								</div>
								<div className="text-sm ">
									<h3>{item.description}</h3>
								</div>
							</div>
							<div className="flex flex-col justify-center ">
								<p>
									{item.price}
									<span>{char}</span>
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
			<Counter className="flex justify-end" />
			<div className="pt-4 md:pt-0">
				<hr />
			</div>
			{accessories.length === 0 ? (
				""
			) : (
				<div>
					<h2 className="text-lg font-semibold mt-4 sm:mt-0 mb-2">
						{description.accessories}
					</h2>
					<AccessoriesChooser
						accessories={accessories}
						states={[product, setProduct, sumAcc, setSumAcc]}
					/>
				</div>
			)}
			<div className="flex flex-row justify-between gap-2  cursor-pointer text-center mt-4 w-full">
				<div
					className="choose-border bg-blueLight text-white p-2 buy-btn-anim w-full mr-2"
					onClick={(e) => {
						dispatch(
							addProduct({
								id: new Date().getTime(),
								name: product.name,
								price: product.price,
								count: product.count,
								accessories: product.accessories,
								amount: product.amount,
							})
						);
						pushLink(e, "/buy", router);
					}}
				>
					<span> {buy}</span>
				</div>
				<div
					className="choose-border bg-blueLight text-white p-2 buy-btn-anim w-full "
					onClick={() => {
						setToCart(true);
						setTimeout(() => {
							setToCart(false);
						}, 500);
						dispatch(
							addProduct({
								id: new Date().getTime(),
								name: product.name,
								price: product.price,
								count: product.count,
								accessories: product.accessories,
								amount: product.amount,
							})
						);
					}}
				>
					<div
						className={`${
							toCart
								? " block -translate-y-5 text-opacity-10"
								: ""
						} transition ease-in-out duration-500 pr-5   transform absolute w-full flex -inset-y-5  justify-center text-black`}
					>
						<div className={`${toCart ? "block" : "hidden"}`}>
							<span>{popAdd[lang].add}</span>
						</div>
					</div>
					<span>{cart}</span>
				</div>
			</div>
		</div>
	);
}

Chooser.defaultProps = {
	items: defaultValues.product,
	select: null,
};
