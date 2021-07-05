import { NextSeo } from "next-seo";
import * as React from "react";
import toast from "react-hot-toast";
import {
	useUpdateProfileMutation,
	useUserQuery
} from "~/graphql/types.generated";
import SettingsPageWrapper from "~/modules/settings/components/SettingsPageWrapper";

export default function AccountSettingsPage() {
	const initialState = {
		id: undefined,
		name: "",
	};
	const [state, setState] = React.useState(initialState);
	const {} = useUserQuery(
		{},
		{
			onSuccess(data) {
				if (state.name === "" && typeof state.id === "undefined") {
					setState((prev) => ({
						...prev,
						id: data.user.id,
						name: data?.user?.name ?? "",
					}));
				}
			},
		},
	);
	const { mutate } = useUpdateProfileMutation({
		onSuccess() {
			toast.success("Successfully updated profile.", {
				position: "top-center",
				duration: 3000,
			});
		},
	});

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		mutate({ input: state });
	};

	return (
		<SettingsPageWrapper>
			<NextSeo title="Profile Settings" noindex />
			<div className="flex flex-col flex-grow w-full gap-8 pl-0 mt-4 lg:mt-0 lg:pl-12">
				<div className="flex items-center justify-between w-full pb-4 border-b border-gray-500">
					<span className="text-xl font-bold">Profile settings</span>
				</div>
				<div className="grid grid-rows-2 rounded-lg dark:bg-gray-900">
					<form onSubmit={onSubmit} className="flex flex-col w-1/2 gap-4">
						<div className="w-full">
							<label htmlFor="name" className="block">
								Name
							</label>
							<input
								id="name"
								type="text"
								className="block w-full h-10 mt-4 text-black rounded-lg focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 caret-black"
								value={state.name}
								onChange={(e) =>
									setState((prev) => ({ ...prev, name: e.target.value }))
								}
								required
							/>
						</div>
						<button
							type="submit"
							className="px-4 py-2 mt-4 ml-auto transition bg-gray-100 border border-gray-300 rounded-md dark:border-none dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 focus:outline-none"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</SettingsPageWrapper>
	);
}
