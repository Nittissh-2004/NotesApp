import React, { useState } from "react";

const NoteModal = ({ note, onClose, dispatch }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [tags, setTags] = useState(note.tags.join(", "));

  const handleSave = () => {
    const updatedNote = {
      ...note,
      title,
      content,
      tags: tags.split(",").map((t) => t.trim()),
    };
    dispatch({ type: "EDIT_NOTE", payload: updatedNote });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-cyan-200 bg-opacity-40 flex items-center justify-center px-4 z-50">
      <div className="bg-white rounded w-full max-w-md p-4 relative">
        <button
          className="absolute top-3 right-2 cursor-pointer"
          onClick={onClose}
        >
          ❌
        </button>
        <h2 className="text-blue-600 text-2xl font-bold mb-2">Edit Note</h2>
        <h4 className="text-orange-600 font-semibold text-xl" type="">
          Title :
        </h4>
        <input
          type="text"
          className="border border-amber-900 w-full p-2 mb-4 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h4 className="text-orange-600 font-semibold text-xl">Content :</h4>
        <textarea
          className="border border-amber-900 w-full p-2 mb-2 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <h4 className="text-orange-600 font-semibold text-xl">Tags :</h4>
        <input
          className="border border-amber-900 w-full p-2 mb-4 rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <div className="text-right">
          <button
            className="bg-green-800 text-white text-right mt-2 px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;