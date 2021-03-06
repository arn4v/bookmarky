import { CardStackIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import React from "react";
import Drawer, { DrawerContent } from "~/components/Drawer";
import { useGetAllTagsQuery } from "~/graphql/types.generated";
import useDisclosure from "~/hooks/use-disclosure";
import useStore from "../../common/components/Create";
import useDashboardStore from "../store";
import Tag from "./Tag";

export default function TagsDrawer(): JSX.Element {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { isOpen: isCreateOpen, onClose: onCreateClose } = useStore();
	const { data } = useGetAllTagsQuery();
	const { tag } = useDashboardStore();

	return (
		<>
			<button
				onClick={() => {
					if (isCreateOpen) onCreateClose();
					onOpen();
				}}
				className="focus:outline-none dark:text-white"
			>
				<CardStackIcon className="w-5 h-5" />
			</button>
			<Drawer isOpen={isOpen} onClose={onClose}>
				<DrawerContent
					placement="bottom"
					className="w-full h-auto py-8 bg-white rounded-t-lg dark:bg-gray-900 overflow-y-scroll scrollbar scrollbar-thin dark:scrollbar-thumb-gray-500 scrollbar-track-gray-500 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-700 max-h-[75%]"
				>
					<ul className={clsx(["flex flex-col w-full gap-4 px-6 text-base"])}>
						<h1 className="text-lg font-bold dark:text-white">Tags</h1>
						<div className="flex flex-col items-center justify-start w-full gap-4 my-2">
							<Tag
								isEditModeEnabled={false}
								data={{ id: undefined, name: "All" }}
								active={typeof tag === "undefined"}
							/>
							{data?.tags
								?.sort((a, b) => a.name.localeCompare(b.name))
								.map((item) => {
									return (
										<Tag
											key={item.id}
											data={item}
											active={tag === item.id}
											isEditModeEnabled={false}
										/>
									);
								})}
						</div>
					</ul>
				</DrawerContent>
			</Drawer>
		</>
	);
}
