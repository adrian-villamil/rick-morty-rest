import { useEffect, useState } from "react";
import { api } from "../api/apiClient";

export const useAxios = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { page, name } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(url, { params: { page, name } });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const responseInterceptor = api.interceptors.response.use();
    return () => {
      api.interceptors.response.eject(responseInterceptor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, page, name]);

  return { loading, error, data };
};