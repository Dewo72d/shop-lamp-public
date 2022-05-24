import "../styles/tailwind.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { wrapper } from "../redux/store";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";

function phatherComponent({ Component, pageProps }) {
	const [width, setWidth] = useState(null);
	//const pageProducts = useSelector((state) => state.basketReducer.products);
	const [lang, setLang] = useState(useRouter().locale);
	const supportLang = useRouter().locales;
	const path = useRouter().pathname;

	useEffect(async () => {
		setWidth(window.innerWidth);
		const language = supportLang.filter((item) => lang === item)[0];
		return setLang(language);
	}, []);


	return (
		<>
			<div
				className={`${
					path === "/products/[id]" ? "static" : "fixed"
				}  z-50 w-full`}
			>
				{width > 968 ? (
					<Navbar language={lang} />
				) : (
					<SideNav language={lang} />
				)}
			</div>
			<Component language={lang} {...pageProps} />
		</>
	);
}

export default wrapper.withRedux(phatherComponent);
