import React, { useEffect } from 'react';
import validateToken from './validateToken';
import { Route, useNavigate } from 'react-router-dom';



const PrivateRoute = ({ component: Component, ...rest }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!validateToken()) {
            navigate('/login'); // Redireccionar a la página de inicio de sesión
        }
    }, []);

    return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
