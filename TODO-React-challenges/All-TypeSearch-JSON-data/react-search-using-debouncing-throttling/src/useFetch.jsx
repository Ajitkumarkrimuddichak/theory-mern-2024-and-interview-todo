import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const loadPost = useCallback(async () => {
    setLoading(true);
    const response = await axios.get(url);
    setPosts(response.data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    loadPost();
  }, [url, loadPost]);

  return { loading, posts };
};
