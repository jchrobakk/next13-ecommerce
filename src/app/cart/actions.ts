"use server";

import { CartRemoveProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";
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

export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			itemId,
		},
	});
};
