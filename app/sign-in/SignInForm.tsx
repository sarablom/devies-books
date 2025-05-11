"use client";

import { useActionState, useEffect } from "react";
import { login } from "@/app/actions/auth";
import styles from "./sign-in.form.module.css";
import { useRouter } from "next/navigation";

export default function SignInForm() {
	const [loggedIn, formAction, isPending] = useActionState(
		login,
		null,
		"/my-books"
	);
	const router = useRouter();

	useEffect(() => {
		if (loggedIn) {
			router.push("/my-books");
		}
	}, [loggedIn, router]);

	return (
		<form className={styles["sign-in-form"]} action={formAction}>
			<label htmlFor="user-name-input">User name</label>
			<input id="user-name-input" name="username" required />

			<label htmlFor="password-input">Password</label>
			<input id="password-input" type="password" name="password" required />

			<button type="submit">{isPending ? "Processing" : "Login"}</button>
		</form>
	);
}
