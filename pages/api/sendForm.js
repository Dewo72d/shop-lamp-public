import Cors from "cors";
import initMiddleware from "../../helper/initMiddleware";

const cors = initMiddleware(Cors({ methods: ["POST"] }));

export default async function sendForm(req, res) {
	await cors(req, res);
	const data = JSON.stringify(await req.body);

	res.json(data);
}
