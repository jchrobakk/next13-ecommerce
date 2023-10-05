import { NextResponse, type NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { ProductUpdateRatingDocument, ReviewGetByProductIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils";

export async function POST(request: NextRequest): Promise<NextResponse> {
	const json: unknown = await request.json();

	if (
		typeof json === "object" &&
		json !== null &&
		"data" in json &&
		typeof json.data === "object" &&
		json.data !== null &&
		"product" in json.data &&
		typeof json.data.product === "object" &&
		json.data.product !== null &&
		"id" in json.data.product &&
		typeof json.data.product.id === "string"
	) {
		const { reviews } = await executeGraphql({
			query: ReviewGetByProductIdDocument,
			variables: {
				productId: json.data.product.id,
			},
		});

		let avgRating = reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length;

		if (isNaN(avgRating)) {
			avgRating = 1;
		}

		await executeGraphql({
			query: ProductUpdateRatingDocument,
			variables: {
				id: json.data.product.id,
				rating: avgRating,
			},
		});

		revalidateTag("product");
		revalidatePath("/products", "page");
		revalidatePath(`/products/${json.data.product.id}`, "page");
		revalidatePath(`/products/[pageNumber]`, "page");

		return NextResponse.json(
			{ message: `Success. Updated product ${json.data.product.id} rating to ${avgRating}` },
			{ status: 201 },
		);
	}

	return NextResponse.json(
		{
			message: "Invalid body",
		},
		{
			status: 400,
		},
	);
}
