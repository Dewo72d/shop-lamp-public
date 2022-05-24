import { useState, useEffect } from "react";

export default function Footer() {
	const [dateYear, setDateYear] = useState();
	useEffect(async () => {
		const currentYear = new Date().getFullYear();
		setDateYear(currentYear);
	});

	return (
		<div className="bg-black text-white h-12 flex flex-col justify-center p-6">
			<div className="flex flex-row justify-around">
				<div className="">Dewo72d</div>
				<div className="">{""}</div>
				<div className="">{dateYear}</div>
			</div>
		</div>
	);
}
