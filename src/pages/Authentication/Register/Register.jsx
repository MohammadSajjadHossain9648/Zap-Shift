import React from 'react';
import image_upload from '../../../assets/image-upload-icon.png';
import { NavLink } from 'react-router';
import { useForm } from "react-hook-form";
import GoogleLogin from '../socialLogin/GoogleLogin';


const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleRegistration = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1 className="auth_title">Create an Account</h1>
            <p>Register with ZapShift</p>
            <img src={image_upload} className='w-10 mt-3' alt="image upload icon" />

            <form onSubmit={handleSubmit(handleRegistration)} className="fieldset my-3">
                <label className="auth_label">Email</label>
                <input type="email" className="input placeholder:text-placeholder_color" placeholder="Email"
                    {...register('email', { required: true })}
                />
                {errors.email?.type === "required" && (
                    <p role="alert" className='text-red-400'>Email is required</p>
                )}

                <label className="auth_label">Password</label>
                <input type="password" className="input placeholder:text-placeholder_color" placeholder="Password"
                    {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/ })}
                />
                {errors.password?.type === "required" && (
                    <p role="alert" className='text-red-400'>Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                    <p role="alert" className='text-red-400'>Password must contain at least 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                    <p role="alert" className='text-red-400'>Password must include an uppercase letter, a lowercase letter, a number, and a special character.</p>
                )}

                <NavLink to={'/forget_password'} className="link-hover text-auth_secondary_text">Forgot password?</NavLink>
                <button className="btn form_btn">Register</button>
                <p className="text-auth_secondary_text">Already have an account? <NavLink to={'/login'} className='link-hover text-link_color'>Login</NavLink></p>
                <p className="text-auth_secondary_text mx-auto">Or</p>
                <GoogleLogin name='Register'></GoogleLogin>
            </form>
        </div>
    );
};

export default Register;