import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user info from localStorage
    const isAuth = localStorage.getItem("auth") === "true";
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (isAuth && name && email) {
      setUser({ displayName: name, email });
    } else {
      setUser(null);
    }

    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
