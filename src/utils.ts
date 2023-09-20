import { type Product } from "./components/types";
import { type TypedDocumentString } from "./gql/graphql";

type ProductResponse = {
	id: string;
	name: string;
	price: number;
	description: string;
	categories: { name: string }[];
	images: { url: string }[];
};

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const transformProduct = (product: ProductResponse): Product => ({
	id: product.id,
	name: product.name,
	price: product.price,
	description: product.description,
	category: product.categories[0]?.name || "No Category",
	image: product.images[0]?.url,
});

export const executeGraphql = async <TResult, TVariables>(
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
