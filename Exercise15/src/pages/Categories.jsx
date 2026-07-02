const categories = [
  { id: "breakfast", name: "Breakfast", description: "Start your day right" },
  { id: "lunch", name: "Lunch", description: "Midday favorites" },
  { id: "dinner", name: "Dinner", description: "Evening meals" },
  { id: "desserts", name: "Desserts", description: "Sweet treats" },
];

const Categories = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      <div className="flex flex-wrap gap-6">

        {categories.map((c) => (
          <div
            key={c.id}
            className="w-full md:w-[48%] bg-white p-4 rounded-lg shadow"
          >
            <h2 className="text-xl font-bold">{c.name}</h2>
            <p className="text-gray-600">{c.description}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Categories;