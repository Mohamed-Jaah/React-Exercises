import React, { createContext, useRef, useState } from "react";

export const PostsContext = createContext();

const initialPosts = [
  { id: 1, title: "Introduction to React", content: "Content of post 1" },
  { id: 2, title: "Understanding React Router", content: "Content of post 2" },
  { id: 3, title: "React Hooks in Depth", content: "Content of post 3" },
];

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);
  // Track the next id explicitly so ids stay unique even if posts are
  // removed later or arrive out of order (prevPosts.length + 1 breaks then).
  const nextId = useRef(initialPosts.length + 1);

  const addPost = (post) => {
    const newPost = { ...post, id: nextId.current };
    nextId.current += 1;
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};
