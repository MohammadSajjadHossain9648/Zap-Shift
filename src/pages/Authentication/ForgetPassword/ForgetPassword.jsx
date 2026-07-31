import React from 'react';
import { NavLink } from 'react-router';

const ForgetPassword = () => {
    return (
        <div>
            <h1 className="auth_title">Forgot Password</h1>
            <p>Enter your email address and we’ll send you a reset link.</p>

            <form className="fieldset my-3">
                <label className="auth_label">Email</label>
                <input type="email" name='email' className="input w-full placeholder:text-placeholder_color" placeholder="Email" />
                <button className="btn form_btn my-5">Send</button>
                <p className="text-auth_secondary_text">Remember your password? <NavLink to={'/login'} className='link-hover text-link_color'>Login</NavLink></p>
            </form>
        </div>
    );
};

export default ForgetPassword;