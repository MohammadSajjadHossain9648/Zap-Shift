import React from 'react';
import { NavLink } from 'react-router';
import GoogleLogin from '../socialLogin/GoogleLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../../customHooks/useAuth';

const Login = () => {
    // react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // authentication
    const { loginUser } = useAuth();

    const handleLogin = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1 className="auth_title">Welcome Back</h1>
            <p>Login with ZapShift</p>

            <form onSubmit={handleSubmit(handleLogin)} className="fieldset my-3">
                <label className="auth_label">Email</label>
                <input type="email" className="input w-full placeholder:text-placeholder_color" placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.firstName?.type === "required" && (
                    <p role="alert" className='text-red-400'>Email is required</p>
                )}

                <label className="auth_label">Password</label>
                <input type="password" className="input w-full placeholder:text-placeholder_color" placeholder="Password"
                    {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/ })}
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
                <button className="btn form_btn">Login</button>
                <p className="text-auth_secondary_text">Don’t have any account? <NavLink to={'/register'} className='link-hover text-link_color'>Register</NavLink></p>
                <p className="text-auth_secondary_text mx-auto">Or</p>
                <GoogleLogin></GoogleLogin>
            </form>
        </div>
    );
};

export default Login;
