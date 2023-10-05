import { cookies } from "next/headers";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import {
	CartGetByIdDocument,
	type CartFragment,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddProductDocument,
	CartSetProductQuantityDocument,
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
			cache: "no-store",
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
		cache: "no-store",
	});
}
export async function addToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
		cache: "no-store",
	});

	const cart = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: orderId,
		},
	});

	// check if product exists in cart

	if (cart.order?.orderItems.some((item) => item.product?.id === productId)) {
		// increment quantity
		const item = cart.order.orderItems.find((item) => item.product?.id === productId);

		if (!item) {
			throw new Error("Item not found");
		}

		return executeGraphql({
			query: CartSetProductQuantityDocument,
			variables: {
				quantity: item?.quantity + 1,
				itemId: item.id,
			},
		});
	}

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
		cache: "no-store",
	});
}

export async function handlePayment() {
	"use server";
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}

	const cart = await getCartFromCookies();

	if (!cart) {
		throw new Error("Missing cart");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cardId: cart.id,
		},
		line_items: cart?.orderItems.map((item) => {
			return {
				price_data: {
					currency: "usd",
					// doing this because hygraph is giving me types that can possibly be null (its not possible)
					product_data: {
						name: item.product?.name || "",
					},
					unit_amount: item.product?.price || 0,
				},
				quantity: item.quantity,
			};
		}),
		mode: "payment",
		success_url: "http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel?sessionId={CHECKOUT_SESSION_ID}",
	});

	if (!checkoutSession.url) {
		throw new Error("Something went really wrong with Stripe");
	}

	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
