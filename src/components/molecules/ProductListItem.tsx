import Link from "next/link";
import { ProductListItemCoverImage } from "../atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	const { id, name, price, categories, images } = product;
	const image = images[0]?.url;
	const category = categories[0]?.name;
	return (
		<li className="cursor-pointer">
			<Link href={`/product/${id}`}>
				<ProductListItemCoverImage src={image} alt={name} />
				<ProductListItemDescription name={name} price={price} category={category} />
			</Link>
		</li>
	);
};
