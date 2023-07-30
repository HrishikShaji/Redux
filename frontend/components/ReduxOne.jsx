"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ReduxOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const user = {
    name: name,
    email: email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(update(user));
  };
  return (
    <div className="bg-gray-500 p-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input onChange={(e) => setName(e.target.value)} />
        <input onChange={(e) => setEmail(e.target.value)} />
        <button className="bg-black text-white">Submit</button>
      </form>
    </div>
  );
};

export default ReduxOne;
