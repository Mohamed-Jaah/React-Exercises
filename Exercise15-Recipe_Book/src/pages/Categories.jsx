import { Link } from "react-router-dom";
import categories from "../data/categories";

const Categories = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">Categories</h1>

        <div className="divide-y divide-slate-100">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/recipes?category=${c.id}`}
              className="block rounded-md px-3 py-4 transition hover:bg-brand-50"
            >
              <h2 className="font-bold text-slate-900 hover:text-brand-500">
                {c.name}
              </h2>
              <p className="text-sm text-slate-500">{c.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
