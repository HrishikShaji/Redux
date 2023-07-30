"use client";
import React from "react";
import { useSelector } from "react-redux";

const ReduxTwo = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <div className="bg-gray-300 p-10">
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default ReduxTwo;
