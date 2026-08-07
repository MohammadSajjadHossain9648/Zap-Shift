import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div className='urbanist_font max-w-7xl mx-auto p-5 md:px-10 md:py-5 text-primary_text bg-body_Bg'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;