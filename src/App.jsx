import React, { useReducer, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import AllNotes from "./Pages/AllNotes.jsx";
import ArchivedNotes from "./pages/ArchivedNotes.jsx";
import PinnedNotes from "./pages/PinnedNotes.jsx";
import Trash from "./Pages/Trash.jsx";
import NotFound from "./pages/NotFound.jsx";
import { getNotes, saveNotes } from "./Utils/LocalStorage.js";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD_NOTE":
      return [action.payload, ...state];
    case "EDIT_NOTE":
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case "DELETE_NOTE":
      return state.map((note) =>
        note.id === action.payload ? { ...note, trashed: true } : note
      );
    case "RESTORE_NOTE":
      return state.map((note) =>
        note.id === action.payload ? { ...note, trashed: false } : note
      );
    case "PERMA_DELETE":
      return state.filter((note) => note.id !== action.payload);
    case "PIN_NOTE":
      return state.map((note) =>
        note.id === action.payload ? { ...note, pinned: !note.pinned } : note
      );
    case "ARCHIVE_NOTE":
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, archived: !note.archived }
          : note
      );
    default:
      return state;
  }
};

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  useEffect(() => {
    dispatch({ type: "INIT", payload: getNotes() });
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const location = useLocation();

  const showNavbar = ["/", "/pinned", "/archived", "/trash"].includes(
    location.pathname
  );
 return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <AllNotes
              notes={notes}
              dispatch={dispatch}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              tagFilter={tagFilter}
              setTagFilter={setTagFilter}
            />
          }
        />
        <Route
          path="/archived"
          element={<ArchivedNotes notes={notes} dispatch={dispatch} />}
        />
        <Route
          path="/pinned"
          element={<PinnedNotes notes={notes} dispatch={dispatch} />}
        />
        <Route
          path="/trash"
          element={<Trash notes={notes} dispatch={dispatch} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
  }

export default App;