import accessoriesCheck from "../../helper/accessoriesCheck";
import defaultValues from "../assets/defaultValues.json";
import { useState, useMemo, useEffect } from "react";
import sumator from "../../helper/sumator";

export default function AccessoriesChooser({ accessories, states }) {
	const [product, setProduct, sumAcc, setSumAcc] = states;
	const [alarm, setAlarm] = useState(false);

	useEffect(async () => {
		await setSumAcc(sumator(product.accessories, "price"));
	}, [alarm]);

	return (
		<div>
			<ul className="choose-ul lg:grid-cols-2 content-around  ">
				{accessories.map((item) => (
					<li
						className={`choose-border h-full flex flex-col justify-center text-center cursor-pointer p-2 transform duration-500 `}
						key={item.id}
						onClick={(event) => {
							accessoriesCheck(
								event.currentTarget,
								{
									id: item.id,
									name: item.name,
									price: item.price,
								},
								{ product: product, set: setProduct }
							);

							setAlarm(!alarm);
						}}
					>
						<div className="text-lg">{item.name}</div>
						<div className="text-sm text-basic">
							{item.description}
						</div>
						<div className="flex flex-col justify-center">
							<p>
								{item.price}
								<span>{item.char}</span>
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

AccessoriesChooser.defaultProps = {
	states: defaultValues.state,
	accessories: defaultValues.product.accessories,
};
