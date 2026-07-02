import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-full bg-white shadow-md flex justify-around items-center p-4">

      <h1 className="text-2xl font-bold text-red-600">
        Recipe Book
      </h1>

      <nav className="flex gap-10">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "text-gray-700"
          }
        >
          Recipes
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "text-gray-700"
          }
        >
          Categories
        </NavLink>

      </nav>
    </div>
  );
};

export default Navigation;