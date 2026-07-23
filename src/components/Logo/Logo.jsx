import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <div className="flex items-end">
            <img src={logo} alt="brand logo" />
            <h1 className='text-3xl md:text-white font-extrabold -ms-5'>ZapShift</h1>
        </div>
    );
};

export default Logo;