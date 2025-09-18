import React from "react";
import NoteCard from "../Components/NoteCard";

const Trash = ({ notes, dispatch }) => {
  const trashedNotes = notes.filter((note) => note.trashed);

  return (
    <div className="p-6 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Trash</h2>
      {trashedNotes.length === 0 ? (
        <p>Trash is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trashedNotes.map((note) => (
            <div key={note.id} className="relative">
              <NoteCard note={note} dispatch={dispatch} isTrashView={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trash;