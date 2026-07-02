import { Link, useParams } from "react-router-dom";
import recipes from "../data/recipes";

const RecipeDetail = () => {
  const { slug } = useParams();
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-slate-100 px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">Recipe not found</h1>
          <p className="mt-2 text-slate-600">
            We couldn't find that recipe. It may have been removed.
          </p>
          <Link
            to="/recipes"
            className="mt-4 inline-block text-brand-500 hover:text-brand-600"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm">
        <Link
          to="/recipes"
          className="text-sm font-medium text-brand-500 hover:text-brand-600"
        >
          ← Back to Recipes
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          {recipe.title}
        </h1>
        <span className="mt-2 inline-block rounded bg-brand-50 px-2 py-1 text-xs font-medium text-brand-600">
          {recipe.category}
        </span>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Ingredients</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">Instructions</h2>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-slate-700">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
