import React from 'react';
import Logo from '../../../components/Logo/Logo';
import youtube from '../../../assets/youtube.png'
import twitter from '../../../assets/twitter.png'
import facebook from '../../../assets/facebook.png'
import linkedin from '../../../assets/linkedin.png'
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-footer_Bg text-secondary_text p-5 md:p-20 rounded-4xl">
            <aside>
                <Logo></Logo>
                <p className="w-full md:w-[70%]">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </aside>

            <div className="w-full border-t-2 border-b-2 border-dashed border-icon py-4">
                <ul className='grid grid-flow-row md:grid-flow-col gap-4 md:gap-8'>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/coverage">Coverage</NavLink></li>
                    <li><NavLink to="/about_us">About Us</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>

            <nav>
                <div className="grid grid-flow-row md:grid-flow-col gap-4">
                    <a target="_blank" href='https://www.youtube.com/'>
                        <img src={youtube} alt="youtube icon" />
                    </a>
                    <a target="_blank" href='https://x.com/'>
                        <img src={twitter} alt="twitter icon" />
                    </a>
                    <a target="_blank" href='https://www.facebook.com/'>
                        <img src={facebook} alt="facebook icon" />
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/'>
                        <img src={linkedin} alt="linkedin icon" />
                    </a>
                </div>
            </nav>
        </footer >
    );
};

export default Footer;