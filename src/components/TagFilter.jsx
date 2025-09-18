import React from "react";

const TagFilter = ({ notes, setTagFilter }) => {
  const allTags = Array.from(new Set(notes.flatMap((note) => note.tags)));

  return (
    <select
      onChange={(e) => setTagFilter(e.target.value)}
      className="mb-4 border p-2 rounded"
    >
      <option value="">All Tags</option>
      {allTags.map((tag) => (
        <option key={tag} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default TagFilter;