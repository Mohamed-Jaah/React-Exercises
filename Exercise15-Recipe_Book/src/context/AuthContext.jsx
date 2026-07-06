import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("recipe-book-auth") === "true"
  );
  const [user, setUser] = useState(
    () => localStorage.getItem("recipe-book-user") || null
  );

  useEffect(() => {
    localStorage.setItem("recipe-book-auth", isAuthenticated);
  }, [isAuthenticated]);

  const login = (username = "Guest") => {
    setUser(username);
    localStorage.setItem("recipe-book-user", username);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("recipe-book-user");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
