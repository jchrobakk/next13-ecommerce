import { getProduct } from "@/api/products";
import { ProductListItemCoverImage } from "@/components/atoms/ProductListItemCoverImage";
import { formatPrice } from "@/utils";

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { image, name, description, price } = await getProduct(params.productId);
	return (
		<article>
			<div className="grid grid-cols-2 gap-4">
				<ProductListItemCoverImage src={image} alt={name} />
				<section className="flex flex-col justify-center gap-4">
					<h1 className="text-4xl font-bold">{name}</h1>
					{/* todo: implement MDX */}
					<p>{description}</p>
					<p className="text-2xl font-semibold text-blue-500">{formatPrice(price / 100)}</p>
				</section>
			</div>
		</article>
	);
}
