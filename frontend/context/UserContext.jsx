"use client";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
