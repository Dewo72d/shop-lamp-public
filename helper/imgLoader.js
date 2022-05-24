export default function imgLoader({ src, width, quality }) {
	return `/public/${src}/?w=${width}&q=${quality || 75}`;
}
