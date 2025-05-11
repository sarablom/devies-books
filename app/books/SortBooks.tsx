"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const SortBooks = ({ books }: { books: Book[] }) => {
	const [sortedBooks, setSortedBooks] = useState(books);

	const sortBooksByName = () => {
		const sortedBooksByName = books
			.slice()
			.sort((a, b) => a.name.localeCompare(b.name));

		setSortedBooks(sortedBooksByName);
	};

	const sortBooksByMostRead = () => {
		const sortedBooksByMostRead = books
			.slice()
			.sort((a, b) => a.haveRead - b.haveRead);
		setSortedBooks(sortedBooksByMostRead);
	};

	const sortBooksByMostWantToRead = () => {
		const sortedBooksByMostWantToRead = books
			.slice()
			.sort((a, b) => a.wantToRead - b.wantToRead);
		setSortedBooks(sortedBooksByMostWantToRead);
	};

	const sortBooksByHighetsRating = () => {
		const sortedBooksByHighestRating = books.sort(
			(a, b) => a.averageRating - b.averageRating
		);
		setSortedBooks(sortedBooksByHighestRating);
	};

	return (
		<section>
			<article>
				<h2>Sort by</h2>
				<div className={styles["sort-buttons-wrapper"]}>
					<button onClick={sortBooksByName}>Name</button>
					<button onClick={sortBooksByMostRead}>Most read</button>
					<button onClick={sortBooksByMostWantToRead}>Most want to read</button>
					<button onClick={sortBooksByHighetsRating}>Highest rating</button>
				</div>
			</article>
			<ul className={styles["all-books-list-wrapper"]}>
				{sortedBooks.map(({ id, name, description }) => (
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
};
