import { ProductListItem } from "../molecules/ProductListItem";

import { getProductsByPage } from "@/api/products";

// @TODO: implement product suggesting

export const SuggestedProducts = async () => {
	const products = await getProductsByPage(1);
	return (
		<>
			<h2 className="title-font mb-1 text-2xl font-medium text-gray-900">
				Other products you may like:
			</h2>
			<ul
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
				data-testid="related-products"
			>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</>
	);
};
