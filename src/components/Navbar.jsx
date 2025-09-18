import React from "react";
import { Link } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import { IoArchiveSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { BsPinAngleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-purple-950 via-blue-600 to-violet-950 text-white px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-4xl font-serif font-extralight">
        Notes App
      </Link>
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Link to="/" className="flex border rounded-lg px-2 focus:outline-2">
          <p className="mt-1 mr-1">
            <ImHome3 />
          </p>{" "}
          Home
        </Link>
        <Link
          to="/pinned"
          className="flex border rounded-lg px-2 focus:outline-2"
        >
          <p className="mt-1 mr-1">
            <BsPinAngleFill />
          </p>
          Pinned
        </Link>
        <Link
          to="/archived"
          className="flex border rounded-lg px-2 focus:outline-2"
        >
          <p className="mt-1 mr-1">
            <IoArchiveSharp />
          </p>
          Archived
        </Link>
        <Link
          to="/trash"
          className="flex border rounded-lg px-2 focus:outline-2"
        >
          <p className="mt-1">
            <MdDelete />
          </p>
          Trash
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;