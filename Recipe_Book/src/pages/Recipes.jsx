import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import recipes from "../data/recipes";
import categories from "../data/categories";

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategoryState] = useState(
    searchParams.get("category") || "all"
  );

  const setActiveCategory = (id) => {
    setActiveCategoryState(id);
    setSearchParams(id === "all" ? {} : { category: id });
  };

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchesQuery = r.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || r.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">All Recipes</h1>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recipes..."
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:max-w-xs"
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                activeCategory === "all"
                  ? "bg-brand-500 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  activeCategory === c.id
                    ? "bg-brand-500 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-slate-500">
            No recipes match your search. Try a different term or category.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <Link
                key={r.id}
                to={`/recipes/${r.slug}`}
                className="rounded-lg bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h2 className="text-lg font-bold text-slate-900">{r.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{r.description}</p>
                <span className="mt-3 inline-block rounded bg-brand-50 px-2 py-1 text-xs font-medium text-brand-600">
                  {r.category}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
