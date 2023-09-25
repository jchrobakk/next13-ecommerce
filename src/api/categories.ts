import { CategoriesGetAllDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphql(CategoriesGetAllDocument, {});

	return graphqlResponse.categories;
};
