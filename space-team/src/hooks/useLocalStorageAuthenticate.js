const useLocalStorageAuthenticate = () => {
  let isAuthenticated;
  const data = localStorage.getItem("isAuthenticated");

  if (data) {
    isAuthenticated = JSON.parse(data);
  } else {
    isAuthenticated = [
      {
        authenticated: false,
      },
    ];
  }

  return isAuthenticated;
};

export default useLocalStorageAuthenticate;
