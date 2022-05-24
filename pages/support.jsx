import Image from "next/image";
import imgLoader from "../helper/imgLoader";
//Reacr Redux
import { useState } from "react";
import { useRouter } from "next/router";
//Translate
import supportText from "./assets/supportText.json";

export default function support() {
	const router = useRouter();
	const [lang, setLang] = useState(router.locale);

	return (
		<main className="pt-20 w-full flex flex-col place-content-center">
			<div className="pt-2">
				<header className="md:pb-12 pb-8">
					<p className="text-4xl font-semibold text-center">Lamp App</p>
				</header>
			</div>
			<div className="flex flex-row justify-center w-full p-4 ">
				<picture className="place-content-center flex pb-2 gap-8 md:gap-16">
					<Image
						className="rounded-lg  w-full"
						alt="Load..."
						src={`../support.png`}
						loader={imgLoader}
						width={280}
						height={500}
					/>
					<Image
						className="rounded-lg w-full "
						alt="Load..."
						src={`../support2.png`}
						loader={imgLoader}
						width={280}
						height={500}
					/>
					<Image
						className="rounded-lg w-full "
						alt="Load..."
						src={`../support3.png`}
						loader={imgLoader}
						width={280}
						height={500}
					/>
				</picture>
			</div>
			<section className="pt-12 flex flex-col justify-center  ">
				<div className="pb-4">
					<h1 className="text-3xl md:text-4xl font-semibold text-center ">
						{supportText[lang].support}
					</h1>
				</div>
				<div className="flex justify-center  place-content-center pb-8">
					<p className="text-left text-lg   text-basic w-10/12 md:w-2/3">
						{supportText[lang].info}
						<span className="underline underline-offset-2 select-all">
							novacom.studio@gmail.com
						</span>
					</p>
				</div>
			</section>
		</main>
	);
}
