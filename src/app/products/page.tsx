import { ProductList } from "@/components/organisms/ProductList";

export default function Products() {
	const products = [
		{
			id: 1,
			name: "Product 1",
			price: 8800,
			image: "/hoodie.png",
			category: "Hoodies",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 2,
			name: "Product 2",
			price: 2500,
			image: "/hat.png",
			category: "Hats",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 3,
			name: "Product 3",
			price: 3500,
			image: "/tshirt.png",
			category: "T-Shirts",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 4,
			name: "Product 4",
			price: 4500,
			image: "/pants.png",
			category: "Pants",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
	];

	return <ProductList products={products} />;
}
