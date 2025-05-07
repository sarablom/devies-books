import { deviesApiBaseURL } from "@/app/utils/urls.constants";
import styles from "./page.module.css";
import Link from "next/link";

export default async function BooksPage() {
	const res = await fetch(`${deviesApiBaseURL}books`);

	if (!res.ok) {
		throw new Error("Kunde inte hämta data");
	}

	const books = await res.json();

	if (!books)
		return (
			<div>
				<h1>Error fetching books</h1>
			</div>
		);

	return (
		<section>
			<h1>All books</h1>
			<ul className={styles["all-books-list-wrapper"]}>
				{books.map(({ id, name, description }: Book) => (
					<li key={`${id}-${name}`}>
						<h2>{name}</h2>
						<small>{description}</small>
						<Link href={`/books/${id}`} className={styles["read-more-btn"]}>
							Läs mer
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
