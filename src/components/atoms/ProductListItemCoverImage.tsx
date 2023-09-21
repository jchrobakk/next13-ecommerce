import Image from "next/image";

type ProductListItemCoverImage = {
	src?: string;
	alt: string;
	size?: number;
};

export const ProductListItemCoverImage = ({ src, alt, size = 320 }: ProductListItemCoverImage) => {
	return (
		<div className="aspect-square rounded-md bg-slate-50 p-4 transition-colors hover:bg-slate-100">
			{src && (
				<Image
					alt={alt}
					src={src}
					width={size}
					height={size}
					className="aspect-square w-full object-contain object-center transition-transform hover:scale-105"
				/>
			)}
		</div>
	);
};
