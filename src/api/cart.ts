import { cookies } from "next/headers";
import {
	CartGetByIdDocument,
	type CartFragment,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddProductDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils";

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const cart = await executeGraphql(CartGetByIdDocument, { id: cartId });

		if (cart.order) {
			return cart.order;
		}
	}
}

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();

	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}

	return cart.createOrder;
}
export function createCart() {
	return executeGraphql(CartCreateDocument, {});
}
export async function addToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});

	if (!product) {
		throw new Error("Product not found");
	}

	await executeGraphql(CartAddProductDocument, {
		orderId,
		productId,
		total: product.price,
	});
}
