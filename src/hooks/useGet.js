import useFetch from "./useFetch";

const useGet = (endpoint, customOptions = {}) => {
  const { data, loading, error, fetch } = useFetch(
    endpoint,
    {
      method: "GET",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        ...customOptions.headers,
      },
      ...customOptions,
    },
    false
  );

  return { data, loading, error, executeGet: fetch };
};

export default useGet;
