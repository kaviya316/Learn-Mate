import React, { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    studyGoal: "5 hrs/day",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow w-96">
        <label className="block mb-2">Name</label>
        <input
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded"
        />
        <label className="block mt-4 mb-2">Email</label>
        <input
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded"
        />
        <label className="block mt-4 mb-2">Study Goal</label>
        <input
          name="studyGoal"
          value={profile.studyGoal}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded"
        />
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Profile;
