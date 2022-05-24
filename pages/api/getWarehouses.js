import Cors from "cors";
import initMiddleware from "../../helper/initMiddleware";

const cors = initMiddleware(Cors({ methods: ["GET", "POST", "OPTIONS"] }));

export default async function getAddress(req, res) {
	await cors(req, res);

	const { ref, name } = JSON.parse(await req.body);
	console.log(ref, name);

	const data = JSON.stringify({
		apiKey: "",
		modelName: "Address",
		calledMethod: "getWarehouses",
		methodProperties: {
			CityRef: await ref,
			FindByString: await name,
			Limit: 5,
		},
	});

	const warehouses = fetch("https://api.novaposhta.ua/v2.0/json/", {
		method: "POST",
		mode: "cors",
		headers: {
			"content-type": "application/json",
		},
		body: data,
	})
		.then(async (raw) => await raw.json())
		.then((dataNP) => {
			if (dataNP.success) {
                console.log(data);
				return dataNP.data ?? [{ Description: "", Ref: 0 }];
			} else {
				return [{ Description: "", Ref: 0 }];
			}
		});

	res.json(await warehouses);
}
