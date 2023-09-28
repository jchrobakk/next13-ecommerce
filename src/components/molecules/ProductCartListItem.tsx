import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductQuantity } from "../atoms/ProductQuantity";
import { RemoveFromCartButton } from "../atoms/RemoveFromCartButton";
import { type CardOrderItemFragment } from "@/gql/graphql";

type ProductCartListItemProps = {
	order: CardOrderItemFragment;
};

export function ProductCartListItem({ order }: ProductCartListItemProps) {
	if (!order || !order.product) {
		notFound();
	}

	const { product } = order;
	return (
		<li className="flex items-center gap-4">
			{product.images[0] && (
				<Image
					width={64}
					height={64}
					src={product.images[0].url}
					alt={product.name}
					className="h-16 w-16 rounded object-cover"
				/>
			)}
			<div>
				<h3 className="text-sm text-gray-900">{product.name}</h3>
				<p className="mt-0.5 space-y-px text-xs text-gray-600">Variant: [todo variant]</p>
			</div>

			<div className="flex flex-1 items-center justify-end gap-2">
				{/* @TODO: add ProductCount */}
				<ProductQuantity quantity={order.quantity} itemId={order.id} />
				<RemoveFromCartButton itemId={order.id} />
			</div>
		</li>
	);
}
