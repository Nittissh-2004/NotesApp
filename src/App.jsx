import React, { useState, useEffect } from "react";
import { saveNotes, loadNotes } from "./Utils/Storage";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import SearchBar from "./components/SearchBar";
import TagFilter from "./components/TagFilter";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.map((note) => note.id === id ? { ...note, isTrashed: true } : note));
  };

  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(search.toLowerCase()) &&
      note.content.toLowerCase().includes(search.toLowerCase()) &&
      (tagFilter === "" || note.tags.includes(tagFilter)) &&
      !note.isTrashed &&
      !note.isArchived
    );
  });

  const pinnedNotes = filteredNotes.filter(note => note.isPinned);
  const otherNotes = filteredNotes.filter(note => !note.isPinned);

  return (
    <div className="p-4 max-w-5xl mx-auto">
     <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">
             Note App  
        </h1>
      <NoteForm onAdd={addNote} />
      <SearchBar search={search} setSearch={setSearch} />
      <TagFilter notes={notes} setTagFilter={setTagFilter} />
      <h2 className="text-xl font-semibold mt-4">Pinned</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pinnedNotes.map((note) => (
          <NoteCard key={note.id} note={note} onUpdate={updateNote} onDelete={deleteNote} />
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-4">Others</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherNotes.map((note) => (
          <NoteCard key={note.id} note={note} onUpdate={updateNote} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default App;