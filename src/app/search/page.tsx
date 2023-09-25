import { getProductsListByName } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const products = await getProductsListByName(searchParams.query);
	return (
		<>
			<ProductList products={products} />
		</>
	);
}
