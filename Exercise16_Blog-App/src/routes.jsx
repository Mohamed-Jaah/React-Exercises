import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts/:postId",
        element: <PostDetail />,
      },
      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        // Catch-all: any unmatched path under "/" renders NotFound.
        // (errorElement only fires on thrown errors, not on a simple
        // unmatched path, so this was missing before.)
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
