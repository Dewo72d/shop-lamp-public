export default function getWarehouseReq(value, state) {
	let data = JSON.stringify(value);
	try {
		fetch(window.location.origin + "/api/getWarehouses", {
			method: "POST",
			body: data,
		})
			.then(async (raw) => {
				const data = await raw.json();
				console.log(data);
                return data;
			})
			.then(async (data) => {
				try {
					console.log(data);
					state(data);
				} catch (e) {
					console.log(e);
				}
			})
			.catch((e) => console.log(e));
	} catch (error) {
		state(error);
	}
}
