import SignInForm from "@/app/sign-in/SignInForm";
import styles from "./page.module.css";
import Link from "next/link";


export default function SignInPage() {
	return (
		<div className={styles.page}>
			<h1>Sign in</h1>
			<p>
				Sign in to see your books or{" "}
				<Link href="/books">click here to watch book list</Link>.
			</p>
			<SignInForm />
		</div>
	);
}
