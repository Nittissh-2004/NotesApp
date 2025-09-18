import React from "react";

const SearchBar = ({ setSearchTerm }) => (
  <input
    type="text"
    className="w-full p-2 mb-4 border-2 border-orange-400 rounded"
    placeholder="🔍 Search notes..."
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;