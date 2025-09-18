import React from "react";

const TagSidebar = ({ notes, tagFilter, setTagFilter }) => {
  const tagCounts = notes.reduce((acc, note) => {
    if (note.trashed || note.archived) return acc;
    note.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const uniqueTags = Object.entries(tagCounts);

  return (
    <div className="bg-yellow-100 p-4 rounded shadow mb-4">
      <h3 className="text-2xl font-semibold mb-3">Tags</h3>
      <button
        className={`mb-2 text-sm block ${
          tagFilter === "" ? "font-bold text-blue-600" : ""
        }`}
        onClick={() => setTagFilter("")}
      >
        All Notes
      </button>
      {uniqueTags.length === 0 ? (
        <p className="text-gray-500 text-sm">No tags found.</p>
      ) : (
        uniqueTags.map(([tag, count]) => (
          <button
            key={tag}
            className={`mb-2 text-sm block ${
              tag === tagFilter ? "font-bold text-blue-600" : ""
            }`}
            onClick={() => setTagFilter(tag)}
          >
            #{tag} ({count})
          </button>
        ))
      )}
    </div>
  );
};

export default TagSidebar;