import React, { useContext } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentId = parseInt(postId, 10);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return (
      <div>
        <p className="text-red-500 font-semibold">Post not found.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to posts
        </Link>
      </div>
    );
  }

  const handleNavigation = (direction) => {
    const newId = direction === "next" ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);
    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>

      <div className="flex gap-3">
        <button
          onClick={() => handleNavigation("prev")}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 font-medium"
        >
          Previous
        </button>
        <button
          onClick={() => handleNavigation("next")}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 font-medium"
        >
          Next
        </button>
      </div>

      {location.state && (
        <p className="text-sm text-gray-500 mt-4">
          You navigated here from post ID: {location.state.fromPostId}
        </p>
      )}
    </div>
  );
};

export default PostDetail;
