import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@/components/organisms/ProductList";
import { getCollectionBySlug } from "@/api/collections";

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const collection = await getCollectionBySlug(params.slug);

	return {
		title: collection?.name,
		description: collection?.description,
	};
}

export default async function Collection({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const products = await getProductsByCollectionSlug(params.slug, +params.pageNumber);
	const collection = await getCollectionBySlug(params.slug);

	if (!products) {
		notFound();
	}

	return (
		<>
			<h1>{collection?.name}</h1>
			<ProductList products={products} />
			<Pagination
				currentPage={+params.pageNumber}
				className="mt-4"
				target={`categories/${params.slug}`}
			/>
		</>
	);
}
