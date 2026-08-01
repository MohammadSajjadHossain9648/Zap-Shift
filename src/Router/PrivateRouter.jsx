import React from 'react';
import useAuth from '../customHooks/useAuth';
import { Blocks } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="mx-auto max-h-screen">
            <Blocks height width="80" color="#4fa94d" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" visible={true} />;
        </div>
    }

    if (!user) {
        return <Navigate to={'/login'} state={location.pathname}></Navigate>;
    }

    return children;
};

export default PrivateRouter;