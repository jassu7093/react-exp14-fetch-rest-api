import React, { useEffect, useState } from "react";
import axios from "axios";

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from JSONPlaceholder
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data.slice(0, 10)); // show only first 10 posts
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data ❌");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>⏳ Loading data...</h3>;
  }

  if (error) {
    return <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🧾 Posts Fetched from JSONPlaceholder</h2>

      <table
        border="1"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "80%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "20px" }}>
        ✅ Data fetched successfully using <strong>Axios</strong>.
      </p>
    </div>
  );
};

export default PostTable;
