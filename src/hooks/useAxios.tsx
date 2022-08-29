import { useState, useEffect } from "react";
import Axios from "axios";

const useAxios = (configObj: any) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [reload, setReload] = useState<number>(0);

  const baseURL = "https://gernagroup-server.herokuapp.com/";

  const refetch = () => setReload((prev) => prev + 1);

  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](baseURL + url, {
          ...requestConfig,
          signal: controller.signal,
        });
        setResponse(res.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (requestConfig.data !== undefined) {
      fetchData();
    }

    if (method.toUpperCase() === 'POST') {
      if (requestConfig.data !== undefined) {
        fetchData()
      }
    } else {
      fetchData();
    }

    return () => controller.abort();

    //eslint-disable-next-line
  }, [reload]);

  return { response, error, loading, refetch };
};

export default useAxios;
