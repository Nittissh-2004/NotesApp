import React, { useState } from "react";
import NoteModal from "./NoteModal";
import { FaEdit } from "react-icons/fa";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BsPinAngleFill } from "react-icons/bs";
import { RiUnpinFill } from "react-icons/ri";

const NoteCard = ({ note, dispatch, isTrashView }) => {
  const { id, title, content, tags, pinned } = note;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-yellow-100 p-4 rounded shadow relative">
      <div className="flex justify-between">
        <div>
          <div>
            <h3 className="font-bold text-lg underline">{title}</h3>
            <p className="text-gray-700 mt-1">{content.slice(0, 100)}...</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className=" grid gap-2 space-x-2">
          <button
            onClick={() => setShowModal(true)}
            className="text-blue-600 cursor-pointer"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => dispatch({ type: "ARCHIVE_NOTE", payload: id })}
            className="text-orange-600 cursor-pointer"
          >
            <RiInboxArchiveLine />
          </button>
          <button
            onClick={() => dispatch({ type: "PIN_NOTE", payload: id })}
            className="text-green-600 cursor-pointer"
          >
            {pinned ? <RiUnpinFill /> : <BsPinAngleFill />}
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE_NOTE", payload: id })}
            className="text-red-600 cursor-pointer"
          >
            <MdDelete />
          </button>
        </div>
      </div>
      {isTrashView && (
        <div className="flex justify-between mt-4 space-x-2">
          <button
            className="text-green-600 px-2 border rounded-lg focus:outline-2 cursor-pointer"
            onClick={() => dispatch({ type: "RESTORE_NOTE", payload: note.id })}
          >
            Restore
          </button>
          <button
            className="text-red-600 px-2 border rounded-lg focus:outline-2 cursor-pointer"
            onClick={() => dispatch({ type: "PERMA_DELETE", payload: note.id })}
          >
            Delete Forever
          </button>
        </div>
      )}

      {showModal && (
        <NoteModal
          note={note}
          onClose={() => setShowModal(false)}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default NoteCard;