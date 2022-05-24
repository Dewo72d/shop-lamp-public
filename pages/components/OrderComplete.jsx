//Helper
import imgLoader from "../../helper/imgLoader";
import Image from "next/image";
import buyFormUa from "../assets/buyFormUa.json";
//React Redux
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { wipeProducts } from "../../redux/actions/basketActions";

export default function OrderComplete({ lang }) {
	const dispatch = useDispatch();
	const router = useRouter();
	//useEffect(() => {}, []);

	setTimeout(() => {
		console.log("DONE");
		router.push("/");
		dispatch(wipeProducts());
	}, 5000);

	//

	return (
		<div className="pt-24 flex flex-col justify-center">
			<div className="flex flex-row justify-center  text-center text-2xl font-semibold pb-4">
				<h1>{buyFormUa[lang].complete}</h1>
			</div>
			<div className="flex justify-center mb-8">
				<Image
					className="rounded-lg"
					alt="Load..."
					src="../../check.png"
					loader={imgLoader}
					width={160}
					height={160}
				/>
			</div>

			<div className="flex flex-row justify-center  text-center text-2xl font-semibold ">
				<h1>{buyFormUa[lang].feedback}</h1>
			</div>
			<div className=" flex justify-center w-full  pb-4 pt-4">
				<div className="bg-blue hover:bg-blueLight p-1  w-3/4 md:w-2/6 rounded-lg text-center text-white">
					<button
						onClick={() => {
							router.push("/");
						}}
					>
						{buyFormUa[lang].back}
					</button>
				</div>
			</div>
		</div>
	);
}

OrderComplete.defaultProps = {
	lang: "ua",
};

/*
	<div className="flex flex-row justify-center pb-1 ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-16 w-16 text-green"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1}
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
*/
