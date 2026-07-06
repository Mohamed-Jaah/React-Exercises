import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  // Local input state so typing feels instant; URL updates on submit.
  const [input, setInput] = useState(searchTerm);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/?search=${encodeURIComponent(input)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search posts"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
        >
          Search
        </button>
      </form>

      {filteredPosts.length > 0 ? (
        <ul className="space-y-2">
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/posts/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500 font-semibold mt-4">No posts found</p>
      )}
    </div>
  );
};

export default Home;
