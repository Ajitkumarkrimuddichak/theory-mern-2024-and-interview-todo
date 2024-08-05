import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (API_URL) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setResponse(response.data);
      } catch (error) {
        setError(error.response);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { response, error, loading };
};

export default useFetch;
