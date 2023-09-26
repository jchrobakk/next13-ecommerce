"use client";

export function AddToCartButton() {
	return (
		<button
			type="submit"
			className="inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
		>
			Add to cart
		</button>
	);
}
