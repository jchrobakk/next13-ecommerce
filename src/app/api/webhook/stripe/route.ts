/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing STRIPE_WEBHOOK_SECRET");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}

	const signature = request.headers.get("stripe-signature");

	if (!signature) {
		return new Response("Invalid signature", {
			status: 401,
		});
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			console.log(event);
			event.data.object.metadata?.cartId;
		}
	}

	return new Response(null, { status: 204 });
}
