import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const getAuth: any = localStorage.getItem("auth");
  const auth = JSON.parse(getAuth);

  if (auth === null) {
    navigate('/login', { replace: true})

    return;
  }

  return auth;
};

export default useAuth;
