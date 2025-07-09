import React, { useEffect, useState } from "react";
import { loadNotes, saveNotes } from "../Utils/Storage";
import NoteCard from "../components/NoteCard";

function Pinned() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const updateNote = (updatedNote) => setNotes(notes.map(n => n.id === updatedNote.id ? updatedNote : n));
  const deleteNote = (id) => setNotes(notes.map(n => n.id === id ? { ...n, isTrashed: true } : n));

  const pinnedNotes = notes.filter(n => n.isPinned && !n.isTrashed);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📌 Pinned Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pinnedNotes.map(note => (
          <NoteCard key={note.id} note={note} onUpdate={updateNote} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default Pinned;