import { CategoriesGetAllDocument, CategoryGetBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphql(CategoriesGetAllDocument, {});

	return graphqlResponse.categories;
};

export const getCategoryBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(CategoryGetBySlugDocument, { slug });

	return graphqlResponse.categories[0];
};
