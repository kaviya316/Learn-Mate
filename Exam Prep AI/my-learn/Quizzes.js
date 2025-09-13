import React, { useState } from "react";

function Quizzes() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    { id: 1, question: "What is 2+2?", options: ["3", "4", "5"], correct: "4" },
    { id: 2, question: "React is a ___?", options: ["Library", "Framework"], correct: "Library" },
    { id: 3, question: "Tailwind is used for?", options: ["Styling", "Database"], correct: "Styling" },
  ];

  const handleAnswer = (id, option) => {
    setAnswers({ ...answers, [id]: option });
  };

  const handleSubmit = () => {
    let sc = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) sc++;
    });
    setScore(sc);
  };

  return (
    <div>
      <h2>Quizzes</h2>
      {questions.map((q) => (
        <div key={q.id} className="bg-white shadow p-4 mb-4 rounded-lg">
          <p className="font-semibold">{q.question}</p>
          <div className="flex space-x-4 mt-2">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(q.id, opt)}
                className={`px-3 py-2 rounded border ${
                  answers[q.id] === opt ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Submit Quiz
      </button>
      {score !== null && (
        <p className="mt-4 font-bold text-lg">Your Score: {score}/{questions.length}</p>
      )}
    </div>
  );
}

export default Quizzes;
