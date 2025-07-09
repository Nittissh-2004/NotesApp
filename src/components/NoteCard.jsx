import React from "react";
function NoteCard({ note, onUpdate, onDelete }) {
  const togglePin = () => onUpdate({ ...note, isPinned: !note.isPinned });
  const toggleArchive = () => onUpdate({ ...note, isArchived: !note.isArchived });
  const moveToTrash = () => onDelete(note.id);
  return (
    <div className="p-4 border rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-bold text-purple-800">{note.title}</h3>
      <p className="text-sm text-gray-700 mt-1 mb-2">{note.content}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {note.tags.map((tag, i) => (
          <span key={i} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">#{tag}</span>
        ))}
      </div>
      <div className="flex gap-3 text-sm">
        <button onClick={togglePin} className="text-blue-600 hover:underline">{note.isPinned ? "Unpin" : "Pin"}</button>
        <button onClick={toggleArchive} className="text-yellow-600 hover:underline">{note.isArchived ? "Unarchive" : "Archive"}</button>
        <button onClick={moveToTrash} className="text-red-600 hover:underline">Trash</button>
      </div>
    </div>
  );
}
export default NoteCard;
