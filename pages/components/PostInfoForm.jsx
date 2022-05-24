import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import getWarehouseReq from "../../helper/requests/getWarehouseReq";
import getCityReq from "../../helper/requests/getCityReq";
import buyFormUa from "../assets/buyFormUa.json";

export default function PostInfoForm({ lang }) {
	//states
	const [citiesFound, setCitiesFound] = useState([]);
	const [cityInpFocuse, setCityInpFocuse] = useState(false);
	const [warehouseInpFocuse, setWarehouseInpFocuse] = useState(false);
	const [selectCity, setSelectCity] = useState("");
	const [warehouses, setWarehouses] = useState([{ Description: "", Ref: 0 }]);
	const amount = useSelector((state) => state.basketReducer.amount);
	const [showWrh, setShowWrh] = useState(false);
	//refs
	const valueSearchWarehouse = useRef("");
	const valueSearchCity = useRef("");

	return (
		<div className="flex flex-col gap-2 w-full md:w-4/5 ">
			<div className="text-xl  text-left w-full font-semibold mt-4  md:pt-0">
				{buyFormUa[lang].delivery}
			</div>
			<div className="flex flex-col mt-4 lg:mt-0">
				<div className="z-20">
					<input
						list="city"
						name="city"
						type="search"
						className="inp-form w-full mb-4"
						inputMode="text"
						autoComplete="ooff"
						required
						ref={valueSearchCity}
						placeholder={"City*"}
						onBlur={(elem) => {
							if (elem.currentTarget.value.length > 0) {
								setShowWrh(true);
							} else {
								setShowWrh(false);
							}
						}}
						onChange={(elem) => {
							if (elem.currentTarget.value.length > 0) {
								getCityReq(
									elem.currentTarget.value,
									setCitiesFound
								);
								setCityInpFocuse(true);
							} else {
								setCityInpFocuse(false);
							}
						}}
					/>
					<div className="relative">
						<div className="absolute w-full">
							<ul
								id="city"
								className={`${
									cityInpFocuse ? "" : "hidden"
								}   mb-4  w-full   filter drop-shadow-md
                           z-50 rounded-sm bg-whiteF  flex flex-col p-2 justify-center space-y-4 overflow-y-auto `}
							>
								{citiesFound.map((city) => (
									<li
										className="border-b hover:border-blue-500 w-full h-8 "
										key={city.Ref}
										value={city.Ref}
										onClick={() => {
											setSelectCity(city.Ref);
											setCityInpFocuse(false);
											//Эта строка сетит в велью инпута это значения, что бы юзер понимал что он выбрал
											valueSearchCity.current.value = `${city.AreaDescription} область, ${city.SettlementTypeDescription} ${city.Description}`;
										}}
									>
										{`${city.AreaDescription} область, ${city.SettlementTypeDescription} ${city.Description}`}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				{/*Warehouses*/}
				<div
					className={`${
						showWrh ? "block  z-10 " : "-translate-y-16"
					} transition transform duration-700 `}
				>
					<input
						className="inp-form w-full "
						inputMode="text"
						type="search"
						name="warehouse"
						list="house"
                        autoComplete="nope"
						ref={valueSearchWarehouse}
						required
						placeholder={"Warehouse*"}
						onChange={(elem) => {
							if (elem.currentTarget.value.length > 0) {
								getWarehouseReq(
									{
										ref: selectCity,
										name: elem.currentTarget.value,
									},
									setWarehouses
								);
								setWarehouseInpFocuse(true);
							} else {
								setWarehouseInpFocuse(false);
							}
						}}
					/>
					<div className="absolutew-full bg-whiteF scrollbar-thin scrollbar-track-black  scrollbar-thumb-white scrollbar-thumb-rounded-lg">
						<ul
							id="city"
							className={`${
								warehouseInpFocuse ? "" : "hidden"
							} bg-whiteF mb-4 mt-2 w-full  filter drop-shadow-md  rounded-sm  flex flex-col p-2 justify-center space-y-4 overflow-y-auto `}
						>
							{warehouses.map((warehouse) => (
								<li
									className="border-b hover:border-blue-500 w-full bg-whiteF "
									key={warehouse.Ref}
									onClick={() => {
										valueSearchWarehouse.current.value =
											warehouse.Description;

										setWarehouseInpFocuse(false);
									}}
								>
									{warehouse.Description}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="mt-4 mb-4">
					<hr />
				</div>
				<div className="h-auto grid grid-cols-2 mb-4  gap-2">
					<div className="self-center w-10/12  font-semibold">
						<span className="text-2xl ">
							{buyFormUa[lang].amount + " "}
						</span>

						<span className="text-xl overflow-visible">
							{amount}грн
						</span>
					</div>
					<div className="h-10 text-white ">
						<button className=" bg-blue hover:bg-blueLight rounded-lg  h-full w-full">
							{buyFormUa[lang].subButton}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

PostInfoForm.defaultProps = {
	lang: "ua",
};
