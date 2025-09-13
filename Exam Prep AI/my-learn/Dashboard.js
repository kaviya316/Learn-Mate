import React from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-3 gap-6">
        <Card title="Study Hours" value="24 hrs" icon="📚" />
        <Card title="Quizzes Completed" value="12" icon="📝" />
        <Card title="Notes Taken" value="35" icon="🗒️" />
      </div>
      <Chart />
    </div>
  );
}

export default Dashboard;
