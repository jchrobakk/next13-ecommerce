import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1 className="text-2xl">Main page</h1>
			<Link href="/products" className="text-blue-500 hover:underline">
				Products
			</Link>
		</>
	);
}
