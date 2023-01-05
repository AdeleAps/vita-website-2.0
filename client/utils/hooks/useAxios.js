import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:1000/api";

export const useAxios = (params) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};
