import { ProductVariantPickerOption } from "../atoms/ProductVariantPickerOption";
import { getColorSizeVariantsByProductId } from "@/api/products";

interface ProductVariant {
	id: string;
	name: string;
}

interface ProductVariantPickerProps {
	id: string;
}

export async function ProductVariantPicker({ id }: ProductVariantPickerProps) {
	const variants = await getColorSizeVariantsByProductId(id);

	console.log(variants);

	// @TODO: fix it and use proper types

	return (
		<fieldset className="mt-4 grid grid-cols-2 gap-4">
			<legend className="font-medium text-gray-900">Product Variant</legend>
			{variants.length <= 1 && Object.keys(variants[0] || {}).length === 0 ? (
				<p>No variants for this product</p>
			) : (
				(variants as ProductVariant[]).map((variant: ProductVariant) => (
					<ProductVariantPickerOption key={variant.id} name={variant.name} />
				))
			)}
		</fieldset>
	);
}
