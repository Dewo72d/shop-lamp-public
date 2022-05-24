export default function checkCarrency(lang) {
	let carrency = "$";
	switch (lang) {
		case "ua":
			carrency = "грн";
			break;
		case "ru":
			carrency = "грн";
			break;
		case "en":
			carrency = "грн";
			break;
		default:
			"$";
			break;
	}

	return carrency;
}
