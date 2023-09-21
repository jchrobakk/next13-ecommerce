import {
	ProductsGetListDocument,
	ProductGetByPageDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products;
};

export const getProduct = async (id: string) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {
		id,
	});

	return graphqlResponse.product;
};

export const getProductsByPage = async (page: number) => {
	const productsPerPage = 2;
	const offset = (page - 1) * productsPerPage;

	const graphqlResponse = await executeGraphql(ProductGetByPageDocument, {
		skip: offset,
		first: productsPerPage,
	});

	return graphqlResponse.products;
};
