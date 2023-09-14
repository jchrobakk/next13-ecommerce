import { getProductsByPage } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";
import { Pagination } from "@/components/molecules/Pagination";

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const products = await getProductsByPage(+params.pageNumber);

	return (
		<>
			<ProductList products={products} />
			<Pagination currentPage={+params.pageNumber} className="mt-4" />
		</>
	);
}
