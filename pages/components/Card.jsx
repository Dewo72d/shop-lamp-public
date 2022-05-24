import Image from "next/image";
import card from "../assets/card.json";
import imgLoader from "../../helper/imgLoader";
import { useRouter } from "next/router";
import pushLink from "../../helper/pushLink";

export default function Card({ language }) {
	const router = useRouter();
	return (
		<div className="p-4 pt-24 flex flex-col md:flex-row gap-8 text-white justify-center cursor-pointer ">
			{card[language].map((item) => (
				<div
					className="flex flex-col justify-center lg:w-full !z-0 p-4   transform  md:hover:scale-105 hover:scale-110   transition ease-out duration-500"
					key={item.header}
					onClick={(e) => pushLink(e, item.href, router)}
				>
					<div className="flex justify-center">
						<Image
							className="rounded-lg  "
							alt="Load..."
							src={item.photo}
							loader={imgLoader}
							width={250}
							height={200}
						/>
					</div>
					<div className="flex flex-col justify-center w-full  lg:w-full ">
						<div className="flex flex-row justify-center ">
							<h1 className="underline decoration-1 text-2xl font-bold pb-2">
								{item.header}
							</h1>
						</div>
						<div className="grid grid-rows-2 content-center text-center text-lg text-basic gap-2 w-60">
							<div className="">{item.description}</div>
							<span className="flex flex-row justify-center md:pt-2 text-xl  w-full text-white z-50 ">
								<a
									className=" rounded-md text-center align-middle w-24 min-w-max bg-blue hover:bg-blueLight h-8"
									onClick={(e) =>
										pushLink(e, item.href, router)
									}
								>
									{item.buy}
								</a>
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
