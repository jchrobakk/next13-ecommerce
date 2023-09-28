import { CollectionsGetAllDocument, CollectionGetBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetAllDocument,
		variables: {},
	});

	return graphqlResponse.collections;
};

export const getCollectionBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug,
		},
	});

	return graphqlResponse.collections[0];
};
