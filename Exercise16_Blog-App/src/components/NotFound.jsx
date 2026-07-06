import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-2">404</h1>
        <p className="text-gray-700 mb-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-600 hover:underline font-medium">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
