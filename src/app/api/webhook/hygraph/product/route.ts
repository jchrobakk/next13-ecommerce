import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
	const json: unknown = await request.json();

	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		revalidatePath(`/product/[productId]`, "page");
		revalidatePath(`/products/[pageNumber]`, "page");
		revalidatePath("/categories/[slug]/[pageNumber]", "page");

		console.log(`Revalidated product ${json.productId}`);

		return NextResponse.json(
			{ message: `Success. Product ${json.productId} revalidated.` },
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
