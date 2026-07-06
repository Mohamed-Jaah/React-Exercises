import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes", element: <Recipes /> },
      { path: "recipes/:slug", element: <RecipeDetail /> },
      { path: "categories", element: <Categories /> },
      { path: "login", element: <Login /> },
      {
        path: "dashboard",
        element: <ProtectedRoute element={<Dashboard />} />,
      },
    ],
  },
]);

export default routes;
