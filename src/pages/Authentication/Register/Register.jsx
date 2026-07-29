import React from 'react';
import image_upload from '../../../assets/image-upload-icon.png';
import { NavLink } from 'react-router';
import google from '../../../assets/google.png';

const Register = () => {
    return (
        <div>
            <h1 className="auth_title">Create an Account</h1>
            <p>Register with ZapShift</p>
            <img src={image_upload} className='w-10 mt-3' alt="image upload icon" />

            <fieldset className="fieldset my-3">
                <label className="auth_label">Email</label>
                <input type="email" name='email' className="input placeholder:text-placeholder_color" placeholder="Email" />
                <label className="auth_label">Password</label>
                <input type="password" name='password' className="input placeholder:text-placeholder_color" placeholder="Password" />
                <NavLink to={'/forget_password'} className="link-hover text-auth_secondary_text">Forgot password?</NavLink>
                <button className="btn form_btn">Register</button>
                <p className="text-auth_secondary_text">Already have an account? <NavLink to={'/login'} className='link-hover text-link_color'>Login</NavLink></p>
                <p className="text-auth_secondary_text mx-auto">Or</p>
                <button className="btn form_btn2"> <img src={google} alt="google icon" className='w-6' />Register with google</button>
            </fieldset>
        </div>
    );
};

export default Register;