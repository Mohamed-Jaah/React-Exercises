import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl">
          Welcome to the Recipe Book
        </h1>

        <p className="text-gray-500 mt-2">
          Discover delicious recipes and start cooking today!
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl flex flex-col md:flex-row gap-6">

          {/* Browse Recipes */}
          <Link
            to="/recipes"
            className="flex-1 bg-red-500 p-6 text-white rounded-lg shadow-lg cursor-pointer hover:bg-red-600 transition"
          >
            <h1 className="text-center font-bold text-lg">
              Browse Recipes
            </h1>

            <p className="text-center mt-2">
              Explore our collection of delicious recipes
            </p>
          </Link>

          {/* Browse Categories */}
          <Link
            to="/categories"
            className="flex-1 bg-red-500 p-6 text-white rounded-lg shadow-lg cursor-pointer hover:bg-red-600 transition"
          >
            <h1 className="text-center font-bold text-lg">
              Browse Categories
            </h1>

            <p className="text-center mt-2">
              Explore recipe categories
            </p>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Home;