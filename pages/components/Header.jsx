import Image from "next/image";
import imgLoader from "../../helper/imgLoader";
import header from "../assets/header.json";
import { useState, useEffect } from "react";

export default function Header(props) {
	const [lang, setLang] = useState("en");
	const [width, setWidth] = useState(100);
	useEffect(async () => {
		setLang(props.language) || "en";

		//Когда будут фото, поправить!!!!
		if (window.screen.width >= 700) {
			setWidth(700);
		} else {
			setWidth(window.screen.width);
		}
		//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	}, [props.language]);

	return (
		<div className="min-h-screen md:min-h-full md:pb-24 mt-8 md:min-w-full ">
			{header[props.language].map((item) => {
				return (
					<div
						className="flex flex-col justify-center text-center "
						key={item.h1}
					>
						<h2 className="text-white text-xl mb-4">{item.h2}</h2>
						<h1 className="text-white text-3xl mb-6">{item.h1}</h1>

						<div className="w-full h-full flex place-content-center ">
							<video
                                className="rounded-lg object-cover  "
								autoPlay
								loop
								
							>
								<source src="../lamp.mp4" />
							</video>
						</div>

						<div className="flex flex-row justify-between md:justify-around gap-4 mt-12">
							<div
								onClick={() =>
									(window.location.href = "http://google.com")
								}
							>
								<Image
									className="rounded-lg z-0"
									alt="Load..."
									src="../gplay.png"
									loader={imgLoader}
									width={150}
									height={50}
								/>
							</div>

							<div
								onClick={() =>
									(window.location.href = "http://google.com")
								}
							>
								<Image
									className="rounded-lg z-0"
									alt="Load..."
									src="../astore.png"
									loader={imgLoader}
									width={150}
									height={50}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
