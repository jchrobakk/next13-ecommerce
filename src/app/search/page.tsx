type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export default function SearchPage({ searchParams }: SearchPageProps) {
	return (
		<div>
			<h1>Search Page</h1>
			<p>Search query: {searchParams.query}</p>
		</div>
	);
}
