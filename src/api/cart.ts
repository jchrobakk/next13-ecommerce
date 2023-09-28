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
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ["cart"],
			},
		});

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

	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	return cart.createOrder;
}
export function createCart() {
	return executeGraphql({
		query: CartCreateDocument,
		variables: {},
	});
}
export async function addToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});

	if (!product) {
		throw new Error("Product not found");
	}

	await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
			total: product.price,
		},
	});
}
