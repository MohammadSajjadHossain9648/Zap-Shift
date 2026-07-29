import React from 'react';
import { NavLink } from 'react-router';
import google from '../../../assets/google.png';

const Login = () => {
    return (
        <div>
            <h1 className="auth_title">Welcome Back</h1>
            <p>Login with ZapShift</p>

            <fieldset className="fieldset my-3">
                <label className="auth_label">Email</label>
                <input type="email" name='email' className="input placeholder:text-placeholder_color" placeholder="Email" />
                <label className="auth_label">Password</label>
                <input type="password" name='password' className="input placeholder:text-placeholder_color" placeholder="Password" />
                <NavLink to={'/forget_password'} className="link-hover text-auth_secondary_text">Forgot password?</NavLink>
                <button className="btn form_btn">Login</button>
                <p className="text-auth_secondary_text">Don’t have any account? <NavLink to={'/register'} className='link-hover text-link_color'>Register</NavLink></p>
                <p className="text-auth_secondary_text mx-auto">Or</p>
                <button className="btn form_btn2"> <img src={google} alt="google icon" className='w-6' />Login with google</button>
            </fieldset>
        </div>
    );
};

export default Login;