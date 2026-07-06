import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={5}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
