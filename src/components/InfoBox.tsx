import clsx from "clsx";
import { HiOutlineInformationCircle } from "react-icons/hi";
import colors from "~/lib/colors";
import { Colors } from "~/types/Colors";

export interface InfoBoxProps {
	className?: string;
	text?: string;
	bgColor: Colors;
	textColor: Colors;
}

export default function InfoBox({
	className,
	bgColor,
	text,
	textColor,
}: InfoBoxProps): JSX.Element {
	return (
		<div
			style={{ color: colors[textColor], backgroundColor: colors[bgColor] }}
			className={clsx([
				`flex px-4 py-2 gap-2 items-center rounded-lg`,
				className,
			])}
		>
			<HiOutlineInformationCircle className={clsx([`text-${textColor}`])} />
			{text}
		</div>
	);
}
