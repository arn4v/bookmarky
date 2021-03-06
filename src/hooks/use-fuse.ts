import Fuse from "fuse.js";
import * as React from "react";

export interface UseFuse<T extends unknown> {
	data: T[];
	query: string;
	options: Fuse.IFuseOptions<T>;
	onFilter?: (result: T[]) => T[];
}

export default function useFuse<T extends unknown>({
	data,
	query = "",
	options = {},
	onFilter = (result) => result,
}: UseFuse<T>) {
	const fuse = React.useMemo(() => {
		return new Fuse(data, options);
	}, [data, options]);

	const result = React.useMemo(() => {
		return onFilter(
			query
				? fuse.search(query).map((item) => {
						return item.item;
				  })
				: data,
		);
	}, [data, onFilter, fuse, query]);

	return { fuse, result };
}
