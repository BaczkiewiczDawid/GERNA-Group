import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthenticate = (isAuthenticated) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated.authenticated === false || isAuthenticated.loggedUser === undefined) {
          navigate('/login', {replace: true})
        }
    
    }, [isAuthenticated, navigate])
}

export default useAuthenticate;