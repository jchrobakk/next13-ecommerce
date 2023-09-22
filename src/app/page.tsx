import { getProductsByPage } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export default async function Home() {
	const products = await getProductsByPage(1);
	return (
		<>
			<h1 className="text-2xl text-gray-800">Main page</h1>
			<p className="text-gray-800">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste nihil incidunt maxime
				sed, at enim eligendi magni tempora, ipsum doloremque fuga voluptates pariatur! Itaque
				aspernatur aperiam quis. Itaque, recusandae.
			</p>
			<h2>Featured products (for testing purposes for now)</h2>
			<ProductList products={products} />
		</>
	);
}
