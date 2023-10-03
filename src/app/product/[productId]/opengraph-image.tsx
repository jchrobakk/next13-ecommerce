/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import { getProduct } from "@/api/products";

export const runtime = "edge";
export const contentType = "image/png";

type OpenGraphImageProps = {
	params: {
		productId: string;
	};
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
	const product = await getProduct(params.productId);

	if (!product || !product.images[0] || !product.categories[0]) {
		return new ImageResponse(<>Not found</>);
	}

	const image = product.images[0].url;
	const alt = product.name;

	return new ImageResponse(
		(
			<>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<h1>{product.name}</h1>
					<h3>{product.categories[0].name}</h3>
					<img
						src={image}
						alt={alt}
						style={{
							width: "40%",
						}}
					/>
					<p>{product.description}</p>
				</div>
			</>
		),
	);
}
