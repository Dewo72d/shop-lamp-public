import buyFormUa from "../assets/buyFormUa.json";

export default function ContactForm({ lang }) {
	return (
		<div>
			<div className="  md:pb-4 text-left">
				<span className="text-xl  font-semibold">
					{buyFormUa[lang].contact}
				</span>
			</div>
			<div className="flex flex-col w-full md:w-4/5 text-black">
				<input
					className="inp-form mt-4 mb-2"
					name="name"
					inputMode="text"
					type="name"
					required
					placeholder={"Name*"}
				/>
				<input
					className="inp-form mb-2"
					name="surname"
					inputMode="text"
					type="name"
					required
					placeholder={"Surname*"}
				/>
				<input
					className="inp-form mb-2"
					name="telephone"
					inputMode="numeric"
					type="tel"
					required
					placeholder={"Tel*"}
				/>
				<input
					className="inp-form mb-4"
					name="email"
					inputMode="text"
					type="email"
					placeholder={"Email"}
				/>
				<div className="">
					<hr />
				</div>
			</div>
		</div>
	);
}

ContactForm.defaultProps = {
	lang: "ua",
};
