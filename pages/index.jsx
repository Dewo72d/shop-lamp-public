import Head from "next/head";
import LandAbout from "./components/LandAbout";
import Footer from "./components/Footer";
import ButtonUp from "./components/ButtonUp";
import Header from "./components/Header";
import Card from "./components/Card";


export default function Home({ language }) {
	return (
		<>
			{/*<ButtonUp/> */}
			<main className="p-4 bg-black flex flex-col items-center justify-center pb-12">
				<Head>
					<title>{language}</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Header language={language} />
				<div className="flex flex-col items-center justify-center ">
					<LandAbout language={language} />

					<Card language={language} />
				</div>
			</main>
			<footer className="border-t">
				<Footer language={language} />
			</footer>
		</>
	);
}
