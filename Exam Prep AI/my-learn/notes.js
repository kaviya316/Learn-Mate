import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim() === "") return;
    setNotes([...notes, text]);
    setText("");
  };

  return (
    <div>
      <h2>Notes</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <textarea
          className="w-full border rounded p-3 mb-4"
          rows="4"
          placeholder="Write your note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={addNote}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Note
        </button>
        <ul className="mt-4 space-y-2">
          {notes.map((note, idx) => (
            <li key={idx} className="p-3 border rounded bg-gray-50">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notes;
