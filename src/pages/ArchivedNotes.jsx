import React from "react";
import NoteCard from "../Components/NoteCard";
import { SiTruenas } from "react-icons/si";

const ArchivedNotes = ({ notes, dispatch }) => {
  const archivedNotes = notes.filter((note) => note.archived && !note.trashed);

  return (
    <div className="p-6 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Archived Notes</h2>
      {archivedNotes.length === 0 ? (
        <p>No archived notes.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {archivedNotes.map((note) => (
            <NoteCard key={note.id} note={note} dispatch={dispatch} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchivedNotes;