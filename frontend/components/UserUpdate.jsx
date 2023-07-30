"use client";
import React, { useState } from "react";

const UserUpdate = ({ test }) => {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch(
      `http://localhost:5000/test/updateTest/${test._id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ formData }),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(response);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-10 bg-gray-300"
    >
      <input
        className="p-2 rounded-md"
        placeholder="enter username"
        name="username"
        value={formData.username}
        onChange={(e) => handleChange(e)}
      />
      <input
        className="p-2 rounded-md"
        placeholder="enter email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        className="p-2 rounded-md"
        placeholder="enter password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange(e)}
      />
      <button className="px-3 py-2 bg-black text-white rounded-md">
        Update
      </button>
    </form>
  );
};

export default UserUpdate;
