import { useState, useEffect } from "react";
import Axios from "axios";

const useAxios = (method: string, param: string, data: any) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState([]);

  const fetchData = () => {
    Axios({
      method: method,
      url: `https://gernagroup-server.herokuapp.com/${param}`,
      data: data,
    })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error };
};

export default useAxios;
