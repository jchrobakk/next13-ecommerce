import { ProductListItemCoverImage } from "../atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type Product } from "../types";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	const { image, name, price, category } = product;
	return (
		<li className="cursor-pointer">
			<ProductListItemCoverImage src={image} alt={name} />
			<ProductListItemDescription name={name} price={price} category={category} />
		</li>
	);
};
