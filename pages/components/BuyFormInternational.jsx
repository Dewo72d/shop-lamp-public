// React/Redux
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Translate

export default function BuyForm() {
	const products = useSelector((state) => state.basketReducer.products);
	const [lang, setLang] = useState(useRouter().locale);

	return (
		<div className="w-full flex flex-col justify-center align-middle text-center">
            <h1>Форма покупки</h1>
			<div>
				<form className="border">1</form>
			</div>
			<div>123</div>
		</div>
	);
}
