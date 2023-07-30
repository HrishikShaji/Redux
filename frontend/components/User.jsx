"use client";
import React, { useState } from "react";

const User = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/test", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-gray-300 p-10 rounded-md"
    >
      <input
        className="p-2 rounded-md"
        name="username"
        value={formData.username}
        onChange={(e) => handleChange(e)}
        placeholder="enter name"
      />
      <input
        className="p-2 rounded-md"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
        placeholder="enter email"
      />
      <input
        className="p-2 rounded-md"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange(e)}
        placeholder="enter password"
      />
      <button className="px-3 py-2 bg-black text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default User;
