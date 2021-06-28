import { useRouter } from "next/router";
import Link from "next/link";
import * as React from "react";
import InfoBox from "~/components/InfoBox";
import { useMutation } from "react-query";
import qs from "qs";

interface RegisterBody {
	email: string;
	password: string;
}

export default function RegisterPage() {
	const [state, setState] = React.useState<RegisterBody>({
		email: "",
		password: "",
	});
	const [error, setError] = React.useState<string>("");
	const router = useRouter();
	const { mutate: handleRegister } = useMutation(
		"register",
		async (variables: RegisterBody) => {
			return await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(variables),
			}).then((res) => res.json());
		},
		{
			onSuccess(res) {
				switch (res.code) {
					case "invalid_password":
						setError(res.message);
						break;
					case "successful":
						router.push("/login");
						break;
					case "user_conflict": {
						router.push(
							"/login?" +
								qs.stringify({
									message: res.message,
								}),
						);
						break;
					}
				}
			},
			onError(error) {
				console.log("error", error);
			},
		},
	);

	return (
		<div className="min-h-screen w-screen flex flex-col items-center justify-center bg-blueGray-50 gap-8 dark:bg-blueGray-800">
			<div className="w-5/6 lg:w-1/3 text-2xl font-bold grid place-items-center">
				Register
			</div>
			{router.query?.message && (
				<InfoBox
					className="w-5/6 mx-auto lg:w-1/3 justify-center"
					text={router.query?.message as string}
					bgColor="indigo-200"
					textColor="indigo-700"
				/>
			)}
			<div className="w-5/6 lg:w-1/3 bg-white rounded-lg shadow-lg py-6 px-10 dark:bg-blueGray-700">
				<form
					className="h-full w-full flex flex-col items-start justify-center gap-5"
					onSubmit={(e) => {
						e.preventDefault();
						setError("");
						handleRegister(state);
					}}>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						className="w-full focus:outline-none focus:ring-2 ring-blue-600 rounded border focus:border-transparent dark:border-gray-400 border-gray-200 dark:bg-blueGray-600 dark:focus:bg-blueGray-500"
						autoComplete="email"
						onChange={(e) =>
							setState((prev) => ({ ...prev, email: e.target.value }))
						}
						required
					/>
					<label htmlFor="password">Password</label>
					<input
						id="password"
						className="w-full focus:outline-none focus:ring-2 ring-blue-600 rounded border focus:border-transparent dark:border-gray-400 border-gray-200 dark:bg-blueGray-600 dark:focus:bg-blueGray-500"
						type="password"
						onChange={(e) =>
							setState((prev) => ({ ...prev, password: e.target.value }))
						}
						autoComplete="new-password"
						required
					/>
					{error.length > 0 && (
						<InfoBox
							bgColor="red-200"
							textColor="red-600"
							text={error}
							className="w-full"
						/>
					)}
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 w-20 rounded font-medium text-white py-2 ml-auto">
						Register
					</button>
				</form>
			</div>
			<div className="mx-auto">
				Already have an account? Login{" "}
				<Link href="/login">
					<a className="text-blue-600 dark:text-blue-400 dark:hover:border-blue-600 hover:border-b dark:border-blue-400 pb-[1px]">
						here
					</a>
				</Link>
				.
			</div>
		</div>
	);
}
