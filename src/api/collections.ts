import { CollectionsGetAllDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetAllDocument, {});

	return graphqlResponse.collections;
};
