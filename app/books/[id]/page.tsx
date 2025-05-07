import { deviesApiBaseURL } from "@/app/utils/urls.constants";
import Image from "next/image";

export default async function SingleBookPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const res = await fetch(`${deviesApiBaseURL}books/${id}`);

	if (!res.ok) {
		throw new Error("Kunde inte hämta data");
	}

	const {
		name,
		genre,
		coverUrl,
		description,
		averageRating,
		// haveRead,
		// currentlyReading,
		// wantToRead,
		// userRating,
	}: Book = await res.json();

	if (!name)
		return (
			<div>
				<h1>Error fetching books</h1>
			</div>
		);

	return (
		<section>
			<h1>{name}</h1>
			 <p>
				<strong>Genre:</strong>{" "}
				{genre}
			</p> 
			<p>
				<strong>Average rating:</strong>{" "}
				{averageRating.toFixed(1)}
			</p>
			<Image src={coverUrl} alt={`Cover image of ${name}`} width={100} height={200} />
			<p>{description}</p> 
		</section>
	);
}
