import { type Product } from "@/components/types";

type ProductResponse = {
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
};

export const getProductsList = async (): Promise<Product[]> => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");

	const productsResponse = (await res.json()) as ProductResponse[];

	return productsResponse.map(transformProduct);
};

export const getProduct = async (id: string): Promise<Product> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponse;

	return transformProduct(productResponse);
};

const transformProduct = (product: ProductResponse): Product => ({
	id: product.id,
	name: product.title,
	price: product.price,
	description: product.description,
	category: product.category,
	image: product.image,
	rating: product.rating,
	longDescription: product.longDescription,
});

export const getProductsByPage = async (page: number): Promise<Product[]> => {
	const productsPerPage = 8;
	const offset = (page - 1) * productsPerPage;

	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${productsPerPage}&offset=${offset}`,
	);

	const productsResponse = (await res.json()) as ProductResponse[];

	return productsResponse.map(transformProduct);
};
