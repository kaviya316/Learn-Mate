import React, { useState } from "react";

function SmartNotes() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    const res = await fetch("http://localhost:5000/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">AI Smart Notes ✨</h2>
      <textarea
        className="w-full p-3 border rounded-md"
        rows="6"
        placeholder="Paste your long notes here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSummarize}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Summarize with AI
      </button>

      {summary && (
        <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
          <h3 className="font-semibold">📌 Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default SmartNotes;
