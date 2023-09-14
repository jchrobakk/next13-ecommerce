import { getProductsByPage } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const products = await getProductsByPage(+params.pageNumber);

	return <ProductList products={products} />;
}
