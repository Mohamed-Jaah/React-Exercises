import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const linkBase =
  "px-4 py-2 rounded-md font-medium transition-colors";

const App = () => {
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto pt-8 px-4">
        <h1 className="text-2xl font-semibold mb-4">React Blog</h1>

        <nav className="flex items-center gap-3 mb-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100"
              }`
            }
          >
            Home
          </NavLink>

          {isAuthenticated && (
            <NavLink
              to="/create"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Create Post
            </NavLink>
          )}

          {isAuthenticated ? (
            <button
              onClick={logout}
              className={`${linkBase} bg-red-600 text-white hover:bg-red-700 ml-auto`}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkBase} ml-auto ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Login
            </NavLink>
          )}
        </nav>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
