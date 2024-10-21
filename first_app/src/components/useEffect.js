import React, { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  // Re-run effect when 'count' changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [count]); // Effect depends on 'count', re-runs when 'count' changes

  return (
    <div>
      <h1>Data Fetch Example</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      <button onClick={() => setCount(count + 1)}>Fetch Next Post</button>
    </div>
  );
};

export default Example;
