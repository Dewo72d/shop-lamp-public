export default function sumator(arr, prop) {
	let sum = 0;
	arr.forEach((element) => {
		let value = !!element[prop] ? element[prop] : 0;
		sum += value;
	});

	return sum;
}
