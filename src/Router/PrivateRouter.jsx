import React from 'react';
import useAuth from '../customHooks/useAuth';
import { Blocks } from 'react-loader-spinner';
import { Navigate } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <Blocks height width="80" color="#4fa94d" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" visible={true} />;
    }

    if (!user) {
        return <Navigate to={'/login'}></Navigate>;
    }

    return children;
};

export default PrivateRouter;