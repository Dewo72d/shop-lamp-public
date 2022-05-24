import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ButtonUp() {
	const upButtonStyle = useRef(false);

	function scroll() {
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;

		try {
			scrolled > coords
				? (upButtonStyle.current.className = " ")
				: (upButtonStyle.current.className = "hidden");
		} catch (error) {
			console.log("Господи, прости..." + error);
		}
	}

	useEffect(async () => {
		window.addEventListener("scroll", scroll);
	}, []);

	return (
		<div className="hidden" ref={upButtonStyle}>
			<div className=" fixed z-30 flex flex-row justify-end w-full h-full">
				<div className="flex flex-col-reverse mb-16 mr-16">
					<div
						className=" bg-blue  w-12  z-30 absolute"
						onClick={() => window.scrollBy(0, -9999)}
					>
						UP
					</div>
				</div>
			</div>
		</div>
	);
}
