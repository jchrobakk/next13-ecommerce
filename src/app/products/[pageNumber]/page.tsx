import { getProductsByPage } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";
import { Pagination } from "@/components/molecules/Pagination";
import { Sort } from "@/components/atoms/Sort";
import { type ProductOrderByInput } from "@/gql/graphql";

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: {
		[key: string]: string | string[];
	};
}) {
	const sortBy = searchParams.sortBy?.toString();

	const products = await getProductsByPage(
		+params.pageNumber,
		(sortBy as ProductOrderByInput) || "name_ASC",
	);

	return (
		<>
			<Sort />
			<ProductList products={products} />
			<Pagination currentPage={+params.pageNumber} className="mt-4" />
		</>
	);
}
