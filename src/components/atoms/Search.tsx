"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, type FormEvent, useState, useEffect } from "react";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("query");
	const [searchQuery, setSearchQuery] = useState(query || "");

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		router.push(`/search?query=${searchQuery}`);
	};

	useEffect(() => {
		if (searchQuery) {
			const timeoutId = setTimeout(() => {
				router.push(`/search?query=${searchQuery}`);
			}, 500);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [searchQuery, router]);

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="relative">
				<label htmlFor="Search" className="sr-only">
					Search
				</label>

				<input
					type="text"
					id="Search"
					placeholder="Search for..."
					className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
					value={searchQuery}
					onChange={handleOnChange}
				/>

				<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
					<button type="submit" className="text-gray-600 hover:text-gray-700">
						<span className="sr-only">Search</span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-4 w-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</button>
				</span>
			</div>
		</form>
	);
};
