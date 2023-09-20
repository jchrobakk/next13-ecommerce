import Image from "next/image";

type ProductImageProps = {
	src?: string;
	alt: string;
	size?: number;
};

export const ProductImage = ({ src, alt, size = 320 }: ProductImageProps) => {
	return src ? (
		<Image
			alt={alt}
			src={src}
			width={size}
			height={size}
			className="aspect-square w-full object-contain object-center transition-transform hover:scale-105"
		/>
	) : (
		"no image"
	);
};
