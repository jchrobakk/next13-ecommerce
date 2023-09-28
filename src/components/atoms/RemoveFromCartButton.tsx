"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "@/app/cart/actions";

type RemoveFromCartButtonProps = {
	itemId: string;
};

export const RemoveFromCartButton = ({ itemId }: RemoveFromCartButtonProps) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			className="text-red-500 disabled:text-slate-400"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItem(itemId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
