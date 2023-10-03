export const ReviewForm = () => {
	return (
		<form className="space-y-4 lg:col-span-3 lg:p-12" data-testid="test-review-form">
			<h2 className="text-lg font-medium text-gray-900">Write a review</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<label className="sr-only" htmlFor="email">
						Email
					</label>
					<input
						required
						className="w-full rounded-lg border-gray-200 p-3 text-sm"
						placeholder="Email address"
						type="email"
						id="email"
					/>
				</div>
				<div>
					<label className="sr-only" htmlFor="name">
						Name<section className="mt-4"></section>
					</label>
					<input
						required
						className="w-full rounded-lg border-gray-200 p-3 text-sm"
						placeholder="Name"
						type="text"
						id="name"
					/>
				</div>
			</div>

			<div>
				{/* @TODO: implement rating component (stars) */}
				<label className="sr-only" htmlFor="rating">
					Rating
				</label>
				<select
					required
					className="w-full rounded-lg border-gray-200 p-3 text-sm"
					placeholder="Rating"
					id="rating"
				>
					<option value="1">1 star</option>
					<option value="2">2 stars</option>
					<option value="3">3 stars</option>
					<option value="4">4 stars</option>
					<option value="5">5 stars</option>
				</select>
			</div>
			<div>
				<label className="sr-only" htmlFor="message">
					Message
				</label>

				<textarea
					required
					className="w-full rounded-lg border-gray-200 p-3 text-sm"
					placeholder="Content"
					rows={8}
					id="content"
				></textarea>
			</div>
			<div>
				<button className="inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 disabled:cursor-wait disabled:bg-blue-400">
					Add review
				</button>
			</div>
		</form>
	);
};
