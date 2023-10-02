import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
	revalidatePath(`/product/[productId]`, "page");
	revalidatePath(`/products/[pageNumber]`, "page");
	revalidatePath("/categories/[slug]/[pageNumber]", "page");

	console.log(`Revalidated products`);

	return NextResponse.json({ message: `Success. Products revalidated.` }, { status: 201 });
}
