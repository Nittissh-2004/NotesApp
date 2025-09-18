import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: uuidv4(),
      title,
      content,
      tags: tags.split(",").map((t) => t.trim()),
      pinned: false,
      archived: false,
      trashed: false,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-yellow-100 p-4 shadow rounded mb-4"
    >
      {/* Title */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="title"
          className="text-orange-600 font-semibold text-xl w-28"
        >
          Title:
        </label>
        <input
          type="text"
          className="w-full border border-cyan-400 p-2 mb-2 rounded"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* Content */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="description"
          className="text-orange-600 font-semibold text-xl w-28"
        >
          Content:
        </label>
        <textarea
          className="w-full border border-cyan-400 p-2 mb-2 rounded"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      {/* Tags */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="description"
          className="text-orange-600 font-semibold text-xl w-28"
        >
          Tags:
        </label>
        <input
          type="text"
          className="w-full border border-cyan-400 p-2 mb-2 rounded"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="text-right">
        <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600">
          Add Note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;