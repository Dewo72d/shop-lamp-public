import Image from "next/image";
import imgLoader from "../../helper/imgLoader";
import about from "../assets/landAbout.json";
import { useState, useEffect } from "react";

export default function LandAbout(prop) {
	const [lang, setLang] = useState("en");
	useEffect(async () => {
		setLang(prop.language) || "en";
	}, [prop.language]);

	return (
		<div className="lg:pt-12 flex flex-col  items-center justify-center min-h-screen gap-20 text-white text-2xl font-fruit w-11/12 lg:w-11/12">
			{about[prop.language].map((item, count) => {
				return (
					<div
						key={item.name}
						className="transform transition hover:-translate-y-2 scale-95 duration-500 hover:scale-100 delay-200 cursor-pointer "
					>
						<a name={item.anchor}></a>
						<div className={item.styleCardDescription}>
							<div className="w-full flex justify-center">
								<div>
									<Image
										className="rounded-lg"
										alt="Load..."
										src={item.photo}
										loader={imgLoader}
										width={item.imgW}
										height={item.imgH}
									/>
								</div>
							</div>
							<span
								className={
									"text-basic " +
									` ${
										count % 2 === 0
											? "md:order-lust"
											: "md:order-first"
									}`
								}
							>
								<h1
									className={
										item.styleHead + " " + item.centering
									}
								>
									{item.name}
								</h1>
								<div className={item.centering}>
									<p className={item.styleDescription}>
										<b className={item.styleMainPrashe}>
											{item.main}.{" "}
										</b>
										{item.description}
									</p>
								</div>
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
