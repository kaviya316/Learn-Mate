
import React from "react";

function Card({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:scale-105 transition">
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-blue-600">{value}</p>
      </div>
    </div>
  );
}

export default Card;
