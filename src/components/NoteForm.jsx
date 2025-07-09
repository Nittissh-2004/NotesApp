import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
     <input
  type="text"
  placeholder="Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  className="w-full p-2 border border-gray-300 rounded-md shadow mb-3"
/>
    const newNote = {
      id: uuidv4(),
      title,
      content,
      tags: tags.split(",").map(t => t.trim()),
      isPinned: false,
      isArchived: false,
      isTrashed: false,
      createdAt: new Date().toISOString()
    };
    onAdd(newNote);
    setTitle("");
    setContent("");
    setTags("");
  };
 
  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded-2xl shadow">
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border border-purple-300 rounded mb-2" required />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} className="w-full p-2 border border-purple-300 rounded mb-2" required></textarea>
      <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} className="w-full p-2 border border-purple-300 rounded mb-3" />
      <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Add Note</button>
    </form>
  );
}
export default NoteForm;