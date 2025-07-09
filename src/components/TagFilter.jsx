import React from "react";
function TagFilter({ notes, setTagFilter }) {
  const uniqueTags = [...new Set(notes.flatMap(note => note.tags))];
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filter by tag:</label>
      <select onChange={(e) => setTagFilter(e.target.value)} className="p-2 border rounded shadow">
        <option value="">All</option>
        {uniqueTags.map((tag, i) => <option key={i} value={tag}>{tag}</option>)}
      </select>
    </div>
  );
}
export default TagFilter;
