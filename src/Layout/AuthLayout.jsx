import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className="flex flex-col md:flex-row inter_font max-w-7xl mx-auto text-auth_primary_text">
            <div className="bg-white md:w-[60%] p-5 lg:px-10 md:py-5">
                <a href='/'>
                    <Logo></Logo>
                </a>
                <div className="md:w-3/4 lg:w-3/5 mx-auto my-10">
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="bg-auth_green md:w-[40%] flex items-center justify-center">
                <img src={authImage} alt="authentication image" />
            </div>
        </div>
    );
};

export default AuthLayout;