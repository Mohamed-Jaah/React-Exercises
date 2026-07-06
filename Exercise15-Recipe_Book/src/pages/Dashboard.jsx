import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import recipes from "../data/recipes";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back, {user}
        </h1>
        <p className="mt-2 text-slate-600">
          This is a protected page — only visible once you're logged in.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-md bg-brand-50 p-4">
            <p className="text-2xl font-bold text-brand-600">
              {recipes.length}
            </p>
            <p className="text-xs text-slate-600">Total recipes</p>
          </div>
          <div className="rounded-md bg-brand-50 p-4">
            <p className="text-2xl font-bold text-brand-600">4</p>
            <p className="text-xs text-slate-600">Categories</p>
          </div>
          <div className="rounded-md bg-brand-50 p-4">
            <p className="text-2xl font-bold text-brand-600">1</p>
            <p className="text-xs text-slate-600">Logged-in user</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
