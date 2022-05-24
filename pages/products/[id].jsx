import { useRouter } from "next/router";
import ProductContainer from "../components/ProductContainer";
import products from "../assets/products.json";

/**
 * Можно было бы обойтись без вложености (компонент ProductСontainer->...)
 * НО этот компонент (id) служит что бы создавать экземпляры вложених в него компонентов.
 * В противном случаии он был бы не читаймый
 */

export async function getStaticPaths() {
	const getPaths = Object.keys(products);
	const paths = getPaths.map((path) => ({ params: { id: path } }));
	return { paths: paths, fallback: true };
}

export async function getStaticProps(context) {
	let product = null;
	let total = null;
	try {
		product = products[context.params.id][context.locale];
		total = context.locale;
	} catch (e) {
		console.log(e);
	}

	return {
		props: { product: product, total: total }, // Это будет в пропах
	};
}

export default function Product({ product, total }) {
	const router = useRouter();
	console.log(total);

	if (router.isFallback) {
		return (
			<div className="grid grid-rows-3 h-screen ">
				<div className=" row-start-2 flex justify-center text-xl"> 
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-12 w-12 animate-spin"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						/>
					</svg>
				</div>
			</div>
		);
	}

	return (
		<div>
			<ProductContainer product={product} total={total} />
		</div>
	);
}
