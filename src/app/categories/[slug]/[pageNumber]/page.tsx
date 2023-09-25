import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@/components/organisms/ProductList";
import { getCategoryBySlug } from "@/api/categories";

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const category = await getCategoryBySlug(params.slug);

	return {
		title: category?.name,
		description: category?.description,
	};
}

export default async function Category({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(params.slug, +params.pageNumber);
	const category = await getCategoryBySlug(params.slug);

	if (!products) {
		notFound();
	}

	return (
		<>
			<h1>{category?.name}</h1>
			<ProductList products={products} />
			<Pagination
				currentPage={+params.pageNumber}
				className="mt-4"
				target={`categories/${params.slug}`}
			/>
		</>
	);
}
