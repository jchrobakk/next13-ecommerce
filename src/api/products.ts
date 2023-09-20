import { type Product } from "@/components/types";
import { ProductsGetListDocument } from "@/gql/graphql";
import { transformProduct, executeGraphql } from "@/utils";

type ProductResponse = {
	id: string;
	name: string;
	price: number;
	description: string;
	categories: { name: string }[];
	images: { url: string }[];
};

export const getProductsList = async (): Promise<Product[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.map(transformProduct);
};

export const getProduct = async (id: string): Promise<Product> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponse;

	return transformProduct(productResponse);
};

export const getProductsByPage = async (page: number): Promise<Product[]> => {
	const productsPerPage = 8;
	const offset = (page - 1) * productsPerPage;

	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${productsPerPage}&offset=${offset}`,
	);

	const productsResponse = (await res.json()) as ProductResponse[];

	return productsResponse.map(transformProduct);
};
