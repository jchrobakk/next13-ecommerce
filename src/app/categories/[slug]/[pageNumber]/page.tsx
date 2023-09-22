export default function Category({ params }: { params: { slug: string; pageNumber: string } }) {
	return (
		<div>
			<h1>Category: {params.slug}</h1>
			<p>Page: {params.pageNumber}</p>
		</div>
	);
}
