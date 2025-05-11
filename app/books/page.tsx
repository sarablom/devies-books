import { deviesApiBaseURL } from "@/app/utils/urls.constants";

import { SortBooks } from "./SortBooks";

export default async function BooksPage() {
	const res = await fetch(`${deviesApiBaseURL}books`);

	if (!res.ok) {
		throw new Error("Kunde inte hämta data");
	}

	const books: Book[] = await res.json();

	if (!books)
		return (
			<div>
				<h1>Error fetching books</h1>
			</div>
		);

	return (
		<section>
			<h1>All books</h1>
      <SortBooks books={books} />
		</section>
	);
}
