import Link from "next/link";
import { ProductListItemCoverImage } from "../atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type Product } from "../types";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	const { id, image, name, price, category } = product;
	return (
		<li className="cursor-pointer">
			<Link href={`/product/${id}`}>
				<ProductListItemCoverImage src={image} alt={name} />
				<ProductListItemDescription name={name} price={price} category={category} />
			</Link>
		</li>
	);
};
