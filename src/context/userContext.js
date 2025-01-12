"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem("user"));
    if (storedAdmin) {
      setUser(storedAdmin);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>;
}
