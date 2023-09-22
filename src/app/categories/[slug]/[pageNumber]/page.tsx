import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export default async function Category({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(params.slug, +params.pageNumber);
	return (
		<>
			{products[0] ? (
				<>
					<ProductList products={products[0].products} />
				</>
			) : (
				<p>There are no products in this category</p>
			)}
		</>
	);
}
