import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@/components/organisms/ProductList";

export default async function Collection({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const products = await getProductsByCollectionSlug(params.slug, +params.pageNumber);

	if (!products) {
		notFound();
	}

	return (
		<>
			<ProductList products={products} />
			<Pagination
				currentPage={+params.pageNumber}
				className="mt-4"
				target={`categories/${params.slug}`}
			/>
		</>
	);
}
