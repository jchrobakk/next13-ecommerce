"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

type ProductQuantityProps = {
	quantity: number;
	itemId: string;
};

export const ProductQuantity = ({ quantity, itemId }: ProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	// @TODO: add decrement button
	// @TODO: implement better ui design
	return (
		<form>
			{optimisticQuantity}
			<button
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="ml-2 h-8 w-8 border bg-slate-50"
			>
				+
			</button>
		</form>
	);
};
