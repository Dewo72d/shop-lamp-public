import { useState, useEffect } from "react";

export default function Form() {
	return (
		<div className="bg-nav lg:mr-36 xl:mr-44 w-11/12 lg:w-6/12 mt-12 flex justify-center p-4 rounded-lg lg:self-end ">
            
			<form className="flex flex-col  w-11/12" action="#">
				<input
					className="bg-nav text-ghost p-2 m-4 text-left justify-center"
					type="text"
					placeholder="Name"
					name="name"
					id="name"
				/>
				<input
					className="bg-nav text-ghost p-2 border-b-2 border-t-2 text-left justify-center"
					type="text"
					placeholder="Surname"
					name="surname"
					id="surname"
				/>
				<input
					className="bg-nav text-ghost p-2 text-left justify-center"
					type="email"
					placeholder="exemple@gmail.com"
					name="email"
					id="email"
				></input>
				<input
					className="bg-nav text-ghost p-2 text-left justify-center  border-t-2 border-b-2 "
					type="tel"
					placeholder="+380"
					name="tel"
					id="tel"
				/>
				<div className="grid">
					<input
						className="mt-4 rounded md:justify-self-end md:w-3/12 md:h-8 bg-blue transition duration-200 hover:bg-blueLight"
						type="submit"
						value="Submit"
						name="submit"
						id="submit"
					/>
				</div>
			</form>
		</div>
	);
}
