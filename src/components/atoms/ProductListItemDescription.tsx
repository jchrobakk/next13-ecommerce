type ProductListItemDescriptionProps = {
	name: string;
	price: number;
	category?: string;
	rating: number;
};

import { formatPrice } from "@/utils";

export const ProductListItemDescription = ({
	name,
	price,
	category,
	rating,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="grid grid-cols-5">
			<div className="col-span-4">
				<h3 className="font-semibold">{name}</h3>
				<p>{category}</p>
			</div>
			<div className="text-right">
				<div data-testid="product-price">{formatPrice(price / 100)}</div>
				<div data-testid="product-rating">{rating}</div>
			</div>
		</div>
	);
};
