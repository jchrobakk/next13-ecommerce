import {
	ProductsGetListDocument,
	ProductGetByPageDocument,
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductGetColorSizeVariantsByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils";

const productsPerPage = 4;

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
	const offset = (page - 1) * productsPerPage;

	const graphqlResponse = await executeGraphql(ProductGetByPageDocument, {
		skip: offset,
		first: productsPerPage,
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (category: string, page: number) => {
	const offset = (page - 1) * productsPerPage;
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: category,
		skip: offset,
		first: productsPerPage,
	});

	return graphqlResponse.categories[0]?.products;
};

export const getProductsByCollectionSlug = async (collection: string, page: number) => {
	const offset = (page - 1) * productsPerPage;
	const graphqlResponse = await executeGraphql(ProductsGetByCollectionSlugDocument, {
		slug: collection,
		skip: offset,
		first: productsPerPage,
	});

	return graphqlResponse.collections[0]?.products;
};

export const getColorSizeVariantsByProductId = async (id: string) => {
	const graphqlResponse = await executeGraphql(ProductGetColorSizeVariantsByIdDocument, {
		id,
	});

	return graphqlResponse.product?.variants || [];
};
