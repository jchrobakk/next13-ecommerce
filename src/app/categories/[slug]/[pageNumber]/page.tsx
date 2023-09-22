import { getProductsByCategorySlug } from "@/api/products";
import { Pagination } from "@/components/molecules/Pagination";
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
					<Pagination
						currentPage={+params.pageNumber}
						className="mt-4"
						target={`categories/${params.slug}`}
					/>
				</>
			) : (
				<p>There are no products in this category</p>
			)}
		</>
	);
}
