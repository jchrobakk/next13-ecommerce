"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

type ProductQuantityProps = {
	quantity: number;
	itemId: string;
};

export const ProductQuantity = ({ quantity, itemId }: ProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form className="flex items-center justify-center rounded border border-gray-200">
			<button
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
			>
				+
			</button>
			<p className="w-16 border-transparent text-center leading-10 sm:text-sm">
				{optimisticQuantity}
			</p>
			<button
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
				className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
			>
				-
			</button>
		</form>
	);
};
