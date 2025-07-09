import React, { useEffect, useState } from "react";
import { loadNotes, saveNotes } from "../Utils/Storage";
import NoteCard from "../components/NoteCard";

function Trash() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const restoreNote = (note) => setNotes(notes.map(n => n.id === note.id ? { ...note, isTrashed: false } : n));
  const deleteForever = (id) => setNotes(notes.filter(n => n.id !== id));

  const trashedNotes = notes.filter(n => n.isTrashed);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🗑️ Trash</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trashedNotes.map(note => (
          <div key={note.id} className="relative">
            <NoteCard note={note} onUpdate={restoreNote} onDelete={deleteForever} />
            <div className="flex justify-between mt-2">
              <button onClick={() => restoreNote(note)} className="text-green-600 font-semibold">Restore</button>
              <button onClick={() => deleteForever(note.id)} className="text-red-600 font-semibold">Delete Forever</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trash;
