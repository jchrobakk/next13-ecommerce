type ProductListItemDescriptionProps = {
	name: string;
	price: number;
	category: string;
};

import { formatPrice } from "@/utils";

export const ProductListItemDescription = ({
	name,
	price,
	category,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="grid grid-cols-5">
			<div className="col-span-4">
				<p className="font-semibold">{name}</p>
				<p>{category}</p>
			</div>
			<div className="col-span-1">{formatPrice(price / 100)}</div>
		</div>
	);
};
