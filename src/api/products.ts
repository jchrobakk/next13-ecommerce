import { type Product } from "@/components/types";

export const getProductsList = async (): Promise<Product[]> => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");

	interface ProductResponse {
		id: string;
		title: string;
		price: number;
		description: string;
		category: string;
		rating: {
			rate: number;
			count: number;
		};
		image: string;
		longDescription: string;
	}

	const productsResponse = (await res.json()) as ProductResponse[];

	const products = productsResponse.map(
		(product): Product => ({
			id: product.id,
			name: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			image: product.image,
		}),
	);

	return products;
};
