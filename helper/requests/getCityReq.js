export default function getCityReq(value, state) {
	fetch(window.location.origin + "/api/getAddress", {
		method: "POST",
		body: value,
	})
		.then(async (raw) => await raw.json())
		.then(async (data) => {
			try {
				console.log(data);
				state(await data);
			} catch (e) {
				console.log(e);
			}
		})
		.catch((e) => console.log(e));
}
