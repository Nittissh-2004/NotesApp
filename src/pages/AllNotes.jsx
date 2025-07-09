import React, { useEffect, useState } from "react";
import { loadNotes, saveNotes } from "../Utils/Storage";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";

function AllNotes() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (note) => setNotes([note, ...notes]);
  const updateNote = (updatedNote) => setNotes(notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)));
  const deleteNote = (id) => setNotes(notes.map((n) => (n.id === id ? { ...n, isTrashed: true } : n)));

  const filtered = notes.filter((n) =>
    !n.isTrashed && !n.isArchived &&
    n.title.toLowerCase().includes(search.toLowerCase()) &&
    n.content.toLowerCase().includes(search.toLowerCase()) &&
    (tagFilter === "" || n.tags.includes(tagFilter))
  );

  const pinned = filtered.filter(n => n.isPinned);
  const others = filtered.filter(n => !n.isPinned);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900 text-white flex justify-center items-start p-6">
  <div className="w-full max-w-5xl bg-white text-black rounded-2xl shadow-2xl p-8">
    <h5 className="text-4xl font-bold text-center text-purple-800 mb-6">📝 Notes App</h5>

    <NoteForm onAdd={addNote} />
    <SearchBar search={search} setSearch={setSearch} />
    <TagFilter notes={notes} setTagFilter={setTagFilter} />

    <h2 className="text-2xl font-semibold mt-6 text-purple-700 flex items-center gap-2">📌 Pinned</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {pinned.map((note) => (
        <NoteCard key={note.id} note={note} onUpdate={updateNote} onDelete={deleteNote} />
      ))}
    </div>

    <h2 className="text-2xl font-semibold mt-6 text-purple-700 flex items-center gap-2">🗂️ Others</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {others.map((note) => (
        <NoteCard key={note.id} note={note} onUpdate={updateNote} onDelete={deleteNote} />
      ))}
    </div>
  </div>
</div>

  );
}

export default AllNotes;