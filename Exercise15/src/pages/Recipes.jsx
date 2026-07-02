const recipes = [
  {
    id: 1,
    title: "Classic Chocolate Cake",
    description: "Rich and moist chocolate cake perfect for any occasion",
    category: "desserts",
    ingredients: ["2 cups flour", "1 cup sugar", "3 eggs", "1 cup milk"],
    instructions: [
      "Mix dry ingredients",
      "Add wet ingredients",
      "Bake at 350°F for 25 minutes",
    ],
  },
  {
    id: 2,
    title: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with creamy egg sauce",
    category: "dinner",
    ingredients: ["Spaghetti", "Eggs", "Pecorino cheese", "Black pepper"],
    instructions: ["Cook pasta", "Mix eggs and cheese", "Combine while hot"],
  },
];

const Recipes = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">Recipes</h1>

      <div className="flex flex-wrap gap-6">

        {recipes.map((r) => (
          <div
            key={r.id}
            className="w-full md:w-[48%] bg-white p-4 rounded-lg shadow"
          >
            <h2 className="text-xl font-bold">{r.title}</h2>

            <p className="text-gray-600">{r.description}</p>

            <p className="text-red-500 mt-2">
              Category: {r.category}
            </p>

            <h3 className="mt-3 font-semibold">Ingredients:</h3>
            <ul className="list-disc ml-5 text-sm">
              {r.ingredients.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>

            <h3 className="mt-3 font-semibold">Instructions:</h3>
            <ol className="list-decimal ml-5 text-sm">
              {r.instructions.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ol>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Recipes;