import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

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
		revalidatePath(`/product/${json.data.id}`, "page");
		revalidatePath(`/products/[pageNumber]`, "page");
		revalidatePath("/categories/[slug]/[pageNumber]", "page");

		console.log(`Revalidated product ${json.data.id}`);

		return NextResponse.json(
			{ message: `Success. Product ${json.data.id} revalidated.` },
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
