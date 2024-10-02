import { useState, useEffect } from "react";

const useFetch = (endpoint, options, shouldFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (fetchOptions = undefined) => {
    if (!endpoint) {
      setError("No endpoint provided");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`api${endpoint}`, { ...options, ...fetchOptions });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!shouldFetch) return;
    fetchData();
  }, [endpoint]);

  return { data, loading, error, fetch: fetchData };
};

export default useFetch;
