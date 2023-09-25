import Link from "next/link";
import { getCategoriesList } from "@/api/categories";

export default async function CategoriesList() {
	const categories = await getCategoriesList();
	// TODO: implement categories list
	return (
		<div>
			<h1>Categories List</h1>
			<ul>
				{categories.map((category) => {
					return (
						<li key={category.slug}>
							<Link href={`/categories/${category.slug}`}>{category.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
