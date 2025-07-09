import React from "react";
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border mb-4 rounded shadow"
    />
  );
}
export default SearchBar;
