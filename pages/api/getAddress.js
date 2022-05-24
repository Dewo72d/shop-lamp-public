import Cors from "cors";
import initMiddleware from "../../helper/initMiddleware";

const cors = initMiddleware(Cors({ methods: ["GET", "POST", "OPTIONS"] }));

export default async function getAddress(req, res) {
	await cors(req, res);

	const data = JSON.stringify({
		apiKey: "322",
		modelName: "Address",
		calledMethod: "getCities",
		methodProperties: {
			FindByString: req.body,
			Page: 1,
			Limit: 5,
		},
	});

	const cities = fetch("https://api.novaposhta.ua/v2.0/json/", {
		method: "POST",
		mode: "cors",
		headers: {
			"content-type": "application/json",
		},
		body: data,
	})
		.then(async (raw) => await raw.json())
		.then((dataNP) => dataNP.data ?? [{ Description: "123", Ref: 0 }]);

	res.json(await cities);
}
