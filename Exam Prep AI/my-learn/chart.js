import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", study: 2, quizzes: 1 },
  { day: "Tue", study: 3, quizzes: 2 },
  { day: "Wed", study: 4, quizzes: 1 },
  { day: "Thu", study: 5, quizzes: 3 },
  { day: "Fri", study: 2, quizzes: 2 },
  { day: "Sat", study: 4, quizzes: 1 },
  { day: "Sun", study: 6, quizzes: 3 },
];

function Chart() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-bold mb-3">Study Hours</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="study" stroke="#3498db" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-bold mb-3">Quizzes Completed</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quizzes" fill="#2ecc71" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
