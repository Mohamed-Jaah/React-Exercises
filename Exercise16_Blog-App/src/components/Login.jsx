import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    // Redirect to the page the user was trying to access, or to home.
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Login</h2>
      <p className="text-gray-700 mb-4">
        You must log in to access the Create Post page.
      </p>
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
