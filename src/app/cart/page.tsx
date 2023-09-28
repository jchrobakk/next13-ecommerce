import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
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
		</section>
	);
}
