// React/Redux
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import PostInfoForm from "./PostInfoForm";
// Translate
import buyFormUa from "../assets/buyFormUa.json";
// React
import { useState } from "react";
//Components
import OrderComplete from "./OrderComplete";

export default function BuyFormUa({ lang }) {
	const products = useSelector((state) => state.basketReducer.products);

	const [isSend, setIsSend] = useState(false);
	const [msg, setMsg] = useState(null);
	const sendForm = (e) => {
		let data = new FormData(e.currentTarget);
		let rawData = {
			prodcutsFromCart: products,
		};
		for (const [name, value] of data) {
			rawData[name] = value;
		}
		const dataToSend = JSON.stringify(rawData);
		fetch(window.location.origin + "/api/sendForm", {
			method: "POST",
			body: dataToSend,
		})
			.then(async (raw) => await raw.json())
			.then((e) => {
				return setIsSend(true);
				/* setTimeout(() => {
					setIsSend(false);
					//setMsg(buyFormUa[lang].msg);
				}, 3000); */
			})
			.catch((e) => {
				setMsg(buyFormUa[lang].errMsg);
				console.log(e);
			});
	};

	if (isSend === false) {
		return (
			<div className="flex  justify-center lg:grid grid-cols-8  w-screen text-center h-auto text-black ">
				<div className="w-full lg:w-3/4 p-4  col-span-full col-start-2">
					<div className=" rounded-sm pt-12">
						<h1 className="text-2xl font-semibold">
							{buyFormUa[lang].header}
						</h1>
						<form
							className="flex flex-col pt-4 p-4 "
							autoComplete="off"
							onSubmit={(e) => {
								e.preventDefault();
								sendForm(e);
							}}
						>
							<div
								className={`${
									isSend ? "visible" : "invisible"
								} translate ease-in-out border-2  duration-500  -translate-y-4   `}
							>
								<div className=" ">
									<p>{msg}</p>
								</div>
							</div>
							<div className="h-auto lg:justify-between lg:gap-4 md:grid md:grid-cols-1 ">
								{/*User info */}
								<ContactForm lang={lang} />
								{/*NP API */}
								<PostInfoForm lang={lang} />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	} else {
		return <OrderComplete lang={lang} />;
	}
}

BuyFormUa.defaultProps = {
	lang: "ua",
};
