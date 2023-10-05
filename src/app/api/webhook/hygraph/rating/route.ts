import { NextResponse, type NextRequest } from "next/server";
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
		"id" in json.data &&
		typeof json.data.id === "string"
	) {
		const { reviews } = await executeGraphql({
			query: ReviewGetByProductIdDocument,
			variables: {
				productId: json.data.id,
			},
		});

		let avgRating = reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length;

		if (isNaN(avgRating)) {
			avgRating = 0;
		}

		await executeGraphql({
			query: ProductUpdateRatingDocument,
			variables: {
				id: json.data.id,
				rating: avgRating,
			},
		});

		return NextResponse.json(
			{ message: `Success. Updated product ${json.data.id} rating to ${avgRating}` },
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
