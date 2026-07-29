import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png';

const Authentication = () => {
    return (
        <div className="flex flex-col md:flex-row h-full inter_font max-w-7xl mx-auto text-auth_primary_text">
            <div className="bg-white w-[60%] p-10">
                <a href='/'>
                    <Logo></Logo>
                </a>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="bg-auth_green w-[40%]">
                <img src={authImage} alt="authentication image" />
            </div>
        </div>
    );
};

export default Authentication;