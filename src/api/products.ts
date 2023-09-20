import { type Product } from "@/components/types";
import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";

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

	return graphqlResponse.products.map((p) => {
		return {
			id: p.id,
			name: p.name,
			price: p.price,
			description: p.description,
			category: p.categories[0]?.name || "No Category",
			image: p.images[0]?.url,
		};
	});
};

export const getProduct = async (id: string): Promise<Product> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponse;

	return transformProduct(productResponse);
};

const transformProduct = (product: ProductResponse): Product => ({
	id: product.id,
	name: product.name,
	price: product.price,
	description: product.description,
	category: product.categories[0]?.name || "No Category",
	image: product.images[0]?.url,
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

const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});

	type GraphQLResponse<T> =
		| { data: T; errors: undefined }
		| { data?: undefined; errors: { message: string }[] };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
