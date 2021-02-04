import * as React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store";

export function SearchBar() {
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();
  /** @param {React.ChangeEvent<HTMLInputElement>} e */
  const onChange = (e) => {
    setSearch(e.target.value);
    dispatch({ type: actions.SEARCH_UPDATE, payload: e.target.value });
  };
  const showFilter = () => dispatch({ type: actions.FILTER_SHOW });

  return (
    <div className="flex items-center justify-center w-full gap-3">
      <input
        type="text"
        name="search"
        value={search}
        onChange={onChange}
        placeholder="Search"
        className="w-full placeholder-gray-500 text-gray-700 px-3 py-1.5 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
      />
      <button
        className="flex items-center justify-center h-full gap-2 px-2 rounded-lg dark:bg-blueGray-700 focus:outline-none"
        onClick={showFilter}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 text-white stroke-1">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <span className="text-xs font-medium text-white uppercase">Filter</span>
      </button>
    </div>
  );
}
