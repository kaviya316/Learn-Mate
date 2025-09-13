import React, { useState } from "react";

function Timetable() {
  const [tasks, setTasks] = useState([
    { time: "9:00 AM", subject: "Math Revision" },
    { time: "11:00 AM", subject: "AI Lecture" },
  ]);
  const [newTask, setNewTask] = useState({ time: "", subject: "" });

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ time: "", subject: "" });
  };

  return (
    <div>
      <h2>Timetable</h2>
      <div className="bg-white p-6 shadow rounded-lg">
        <ul className="mb-4">
          {tasks.map((task, idx) => (
            <li key={idx} className="p-2 border-b">
              <strong>{task.time}</strong> — {task.subject}
            </li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Time"
            value={newTask.time}
            onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
            className="border px-2 py-1 rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            value={newTask.subject}
            onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
            className="border px-2 py-1 rounded"
          />
          <button
            onClick={addTask}
            className="px-4 bg-green-500 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
