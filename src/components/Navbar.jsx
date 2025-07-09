import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-600 p-4 text-white shadow-md sticky top-0 z-10">
      <div className="flex gap-6 font-semibold text-lg justify-center">
        <Link to="/" className="hover:text-yellow-300 transition">All Notes</Link>
        <Link to="/pinned" className="hover:text-yellow-300 transition">Pinned</Link>
        <Link to="/archive" className="hover:text-yellow-300 transition">Archive</Link>
        <Link to="/trash" className="hover:text-yellow-300 transition">Trash</Link>
      </div>
    </nav>
  );
}
export default Navbar;