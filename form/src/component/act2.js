import React, { useState } from "react";
import axios from "axios";

const Student = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!userId) {
      setError("Please enter a valid user ID");
      return;
    }
    
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUserData(response.data);
      setError(""); // clear any previous errors
    } catch (error) {
      setUserData(null);
      setError("User not found");
    }
  };

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fetch User Details</h1>
      <div>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={handleInputChange}
        />
        <button onClick={fetchUser}>Get User</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div style={{ marginTop: "20px" }}>
          <h2>User Details</h2>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>City:</strong> {userData.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default Student;
