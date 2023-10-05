"use client";

// import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export const Sort = () => {
	const router = useRouter();
	const pathname = usePathname();
	// const [sortBy, setSortBy] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(event.target.value); // there value is for example "name_ASC"
		router.push(`${pathname}?sortBy=${event.target.value}`);
	};
	return (
		<div className="mb-4">
			<label htmlFor="sortBy" className="block text-sm font-medium text-gray-900">
				Sorting
			</label>

			<select
				onChange={handleChange}
				name="sortBy"
				id="sortBy"
				className="mt-1.5 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
			>
				<option value="name_ASC">Name A-Z</option>
				<option value="name_DESC">Name Z-A</option>
				<option data-testid="sort-by-price" value="price_ASC">
					Price low to high
				</option>
				<option data-testid="sort-by-price" value="price_DESC">
					Price high to low
				</option>
				<option data-testid="sort-by-rating" value="averageRating_ASC">
					Rating low to high
				</option>
				<option data-testid="sort-by-rating" value="averageRating_DESC">
					Rating high to low
				</option>
			</select>
		</div>
	);
};
