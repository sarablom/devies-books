"use server";
import { deviesApiBaseURL } from "@/app/utils/urls.constants";
import { cookies } from "next/headers";

export async function login(prevState: boolean | null, formData: FormData) {
	const username = formData.get("username");
	const password = formData.get("password");

	const res = await fetch(`${deviesApiBaseURL}auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username, password }),
	});

	if (!res.ok) return false;

	const data = await res.json();

	const cookieStore = await cookies();
	cookieStore.set("accessToken", data.accessToken, {
		httpOnly: true,
		path: "/",
		maxAge: 60,
	});
	cookieStore.set("userId", data.userId, {
		httpOnly: true,
		path: "/",
		maxAge: 60,
	});

	return true;
}
