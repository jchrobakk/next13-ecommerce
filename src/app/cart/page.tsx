import { redirect } from "next/navigation";
import { handlePayment, getCartFromCookies } from "@/api/cart";
import { ProductCartListItem } from "@/components/molecules/ProductCartListItem";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	return (
		<section>
			<h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
			<ul>
				{cart.orderItems.map(
					(item) => item.product && <ProductCartListItem order={item} key={item.product.id} />,
				)}
			</ul>
			<div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
				<div className="w-screen max-w-lg space-y-4">
					<dl className="space-y-0.5 text-sm text-gray-700">
						<div className="flex justify-between">
							<dt>Subtotal</dt>
							<dd>£250</dd>
						</div>
					</dl>

					<div className="flex justify-end">
						<form action={handlePayment}>
							<button
								type="submit"
								className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
							>
								Checkout
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
