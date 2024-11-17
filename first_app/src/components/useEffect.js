import React, {useState, useEffect} from "react";

const DataFetchExample=()=>{
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
          setLoading(true);
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);
          if(!response.ok){
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          setData(result);
          setError(null);
      }
      catch(error){
        setError(error.message);
      }
      finally{
        setLoading(false);
      }
    };
    fetchData();
  }, [count]);

  return(
    <>
    <h1>Data Fetch Example</h1>
    {loading && <p>Loading....</p>}
    {error && <p style={{color:'red'}}>Error: {error}</p>}
    {data && <pre>{JSON.stringify(data, null, 2)}</pre> }
    <button onClick={()=> setCount(count+1)}>Fetch Next Post</button>
    </>
  );
};

export default DataFetchExample;