"use client";
import { UserContext } from "@/context/UserContext";
import React, { useContext, useEffect } from "react";
import { useState } from "react";

const UserLogin = () => {
  const { setUserId } = useContext(UserContext);

  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch("http://localhost:5000/test/loginTest", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setUserId(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-10 bg-gray-300 rounded-md"
    >
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
        Login
      </button>
    </form>
  );
};

export default UserLogin;
