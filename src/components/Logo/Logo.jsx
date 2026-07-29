import React from 'react';
import logo from '../../assets/logo.png';

const Logo = ({ textColor = 'text-title_black', size = 'text-xl' }) => {
    return (
        <div className="flex items-end">
            <img src={logo} alt="brand logo" />
            <h1 className={`${size} ${textColor} font-extrabold -ms-4`}>ZapShift</h1>
        </div>
    );
};

export default Logo;