import React from "react";
import NoteForm from "../Components/NoteForm";
import NoteCard from "../Components/NoteCard";
import SearchBar from "../Components/SearchBar";
import TagSidebar from "../components/TagSidebar";

const AllNotes = ({
  notes,
  dispatch,
  setSearchTerm,
  searchTerm,
  tagFilter,
  setTagFilter,
}) => {
  const filteredNotes = notes.filter(
    (note) =>
      (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!tagFilter || note.tags.includes(tagFilter)) &&
      !note.archived &&
      !note.trashed
  );

  const pinned = filteredNotes.filter((note) => note.pinned);
  const others = filteredNotes.filter((note) => !note.pinned);

  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-5 p-5">
      <TagSidebar
        notes={notes}
        tagFilter={tagFilter}
        setTagFilter={setTagFilter}
      />
      <div>
        <SearchBar setSearchTerm={setSearchTerm} />
        <NoteForm dispatch={dispatch} />

        <div className="mt-6">
          {/* {pinned.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-2">Pinned</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {pinned.map(note => (
                  <NoteCard key={note.id} note={note} dispatch={dispatch} />
                ))}
              </div>
            </>
          )} */}

          <h2 className="text-xl font-semibold mb-2">All Notes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} dispatch={dispatch} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNotes;