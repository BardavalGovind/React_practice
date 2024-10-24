import axios from "axios";
import React, { useState, useEffect } from "react";

const App1 = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // Fetch posts from API
  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  // Create a new post
  const createPost = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: "", body: "" });
    } catch (error) {
      console.log("Error creating post:", error);
    }
  };

  // Delete a post
  const DeletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  // Handle input change for new post
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Axios CRUD operations</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newPost.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="body"
        placeholder="Body of the post"
        value={newPost.body}
        onChange={handleChange}
      />
      <button onClick={createPost}>Create Post</button>

      <h2>Posts</h2>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button>Edit</button>
            <button onClick={() => DeletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App1;
