import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = 'https://rickandmortyapi.com/api';

export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BASE_URL}/${url}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, error, data };
};