"use server";

import { CartSetProductQuantityDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils";

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
	});
};
