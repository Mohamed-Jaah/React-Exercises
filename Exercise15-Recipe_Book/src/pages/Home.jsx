import { Link } from "react-router-dom";
import recipes from "../data/recipes";

const Home = () => {
  const featured = recipes.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
          Recipes worth <span className="text-brand-500">saving</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Browse a small, well-tested collection of breakfast, lunch, dinner,
          and dessert recipes — organized by category, ready when you are.
        </p>
        <Link
          to="/recipes"
          className="mt-8 inline-block rounded-md bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600"
        >
          Browse all recipes
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-6 text-xl font-bold text-slate-900">Featured</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {featured.map((r) => (
            <Link
              key={r.id}
              to={`/recipes/${r.slug}`}
              className="rounded-lg bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900">{r.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{r.description}</p>
              <span className="mt-3 inline-block rounded bg-brand-50 px-2 py-1 text-xs font-medium text-brand-600">
                {r.category}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
