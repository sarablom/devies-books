import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {

	return (
		<div className={styles.page}>
			<h1>Welcome to this book site</h1>
			<p>
				<Link href="/sign-in">Sign in</Link> to see your books or{" "}
				<Link href="/books">click here to watch book list</Link>.
			</p>
		</div>
	);
}
