import React from "react";
import NoteCard from "../Components/NoteCard";

const PinnedNotes = ({ notes, dispatch }) => {
  const pinnedNotes = notes.filter(
    (note) => note.pinned && !note.archived && !note.trashed
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pinned Notes</h2>

      {pinnedNotes.length === 0 ? (
        <p className="text-gray-600">No pinned notes available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pinnedNotes.map((note) => (
            <NoteCard key={note.id} note={note} dispatch={dispatch} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PinnedNotes;