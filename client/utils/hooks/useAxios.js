import { useState } from "react";
import axios from "axios";

export const useAxios = (setError) => {
  const [response, setResponse] = useState(null);
  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };
  return { response, fetchData };
};
