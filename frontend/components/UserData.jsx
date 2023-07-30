"use client";

import { UserContext } from "@/context/UserContext";
import React, { useContext, useEffect, useState } from "react";

const UserData = () => {
  const { userId } = useContext(UserContext);
  const [user, setUser] = useState({});

  if (!userId) return <div>No one logged in</div>;
  useEffect(() => {
    fetch(`http://localhost:5000/test/getTest/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="w-full bg-gray-300 p-10 rounded-md">
      <h1>{user?.username}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default UserData;
