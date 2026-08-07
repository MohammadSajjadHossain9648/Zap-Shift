import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { NavLink } from 'react-router';
import aboveArrow from '../../../assets/aboveArrow.png'
import useAuth from '../../../customHooks/useAuth';

const activeClass = ({ isActive }) =>
    `hover:bg-secondary_green hover:text-active_navbar hover:font-bold hover:rounded-full ${isActive ? "bg-secondary_green text-active_navbar font-bold rounded-full" : ""}`

const links = (
    <>
        <li><NavLink to="/services" className={activeClass}>Services</NavLink></li>
        <li><NavLink to="/coverage" className={activeClass}>Coverage</NavLink></li>
        <li><NavLink to="/about_us" className={activeClass}>About Us</NavLink></li>
        <li><NavLink to="/send_parcel" className={activeClass}>Send Parcel</NavLink></li>
        <li><NavLink to="/rider" className={activeClass}>Be a Rider</NavLink></li>
    </>
);

const NavBar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("successfully logout");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-white shadow-sm rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2">
                        {links}
                    </ul>
                </div>
                <NavLink to='/'>
                    <Logo size='text-2xl'></Logo>
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="flex justify-between flex-col md:flex-row gap-2">
                    {
                        user ?
                            <NavLink onClick={handleLogout} className={`btn active_btn rounded-xl text-primary_text`}>Sign Out</NavLink> :
                            <NavLink to={'/login'} className={`btn active_btn rounded-xl text-primary_text`}>Sign In</NavLink>
                    }
                    <div className="flex justify-center items-center">
                        <NavLink to={'/register'} className={`btn active_btn rounded-xl text-primary_text`}>Sign Up</NavLink>
                        <a href="#">
                            <img src={aboveArrow} alt="aboveArrow icon" className="md:w-10 md:h-10 w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;