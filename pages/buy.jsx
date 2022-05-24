// React/Redux
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Components
import BuyFormUa from "./components/BuyFormUa";
// Translate
import buyT from "./assets/buy.json";

export default function buy(props) {
	const products = useSelector((state) => state.basketReducer.products);
	const [lang, setLang] = useState(useRouter().locale);
	if (products.length !== 0) {
		return (
			<div className="h-screen min-w-full w-full  ">
				<BuyFormUa lang={lang} />
			</div>
		);
	} else {
		return (
			<div className="flex justify-center text-center text-2xl h-screen pt-24">
				<h1>{buyT[lang].map((item) => item.messageEmpety)}</h1>
			</div>
		);
	}
}
