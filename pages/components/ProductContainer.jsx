//Helper
import Image from "next/image";
import defaultValues from "../assets/defaultValues.json";
import totalT from "../assets/total.json";
import imgLoader from "../../helper/imgLoader";
//Reacr Redux
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
//Pages
import Custom404 from "../404";
import Chooser from "./Chooser";

export default function ProductContainer({ product, total }) {
	const amount = useSelector(
		(state) => state.basketReducer.amountOnProductPage
	);
	const router = useRouter();
	const { select = 0 } = router.query || 0;

	if (typeof product === "undefined" || product === null)
		return <Custom404 />;
	return (
		<main className="flex flex-col z-30 w-full">
			<div className="sticky underline top-0 pr-3 p-2 w-full text-right text-lg z-40 backdrop-filter backdrop-blur-sm   bg-opacity-90 shadow ">
				<h1 className="">
					{totalT[total].text}: {amount} {totalT[total].curr}
				</h1>
			</div>

			<div className="pt-4 z-30 w-full">
				<div className="md:grid md:grid-cols-2 flex flex-col justify-items-center">
					<div className="flex justify-end lg:p-0 p-8  mg:justify-end  w-full">
						{/*Потенциально Проблемное место */}
						<Image
							className="rounded-lg  "
							alt="Load..."
							src={product.photo}
							loader={imgLoader}
							width={500}
							height={400}
						/>
					</div>
					<div className=" z-30  w-full">
						<div className="md:w-full lg:w-3/4">
							<Chooser items={product} select={select} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

ProductContainer.defaultProps = {
	product: defaultValues.product,
	total: "ua",
};
