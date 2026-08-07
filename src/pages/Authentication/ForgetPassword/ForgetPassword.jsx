import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../customHooks/useAuth';
import { useForm } from 'react-hook-form';

const ForgetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const { updateNewPassword } = useAuth();

    const handleForgetPassword = (data) => {
        updateNewPassword(data.email)
            .then(() => {
                console.log('Password reset email sent!');
                navigate(location?.state || '/');
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    return (
        <div>
            <h1 className="auth_title">Forgot Password</h1>
            <p>Enter your email address and we’ll send you a reset link.</p>

            <form onSubmit={handleSubmit(handleForgetPassword)} className="fieldset my-3">
                <label className="auth_label">Email</label>
                <input type="email" className="input w-full placeholder:text-placeholder_color" placeholder="Email"
                    {...register('email', { required: true })}
                />
                {errors.email?.type === "required" && (
                    <p role="alert" className='text-red-400'>Email is required</p>
                )}

                <button className="btn form_btn my-5">Send</button>
                <p className="text-auth_secondary_text">
                    Remember your password?
                    <NavLink to={'/login'} className='link-hover text-link_color'>Login</NavLink>
                </p>
            </form>
        </div>
    );
};

export default ForgetPassword;