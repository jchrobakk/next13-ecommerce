import { type Product } from "../types";
import { ProductListItem } from "../molecules/ProductListItem";

type ProductListItemProps = {
	products: Product[];
};

export const ProductList = ({ products }: ProductListItemProps) => {
	return (
		<ul className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
