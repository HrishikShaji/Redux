"use client";
import { updateUser } from "@/app/redux/apiCalls";
import { update } from "@/app/redux/userSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxThree = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    updateUser({ name, email }, dispatch);
  };

  if (pending) return <h1>Loading...</h1>;

  return (
    <div className="bg-gray-400 p-10">
      <h1>{user.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="update Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="update Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Submit</button>
        {error && <span>Some Error</span>}
      </form>
    </div>
  );
};

export default ReduxThree;
