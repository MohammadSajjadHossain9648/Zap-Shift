import React from 'react';
import image_upload from '../../../assets/image-upload-icon.png';
import { NavLink } from 'react-router';
import { useForm } from "react-hook-form";
import GoogleLogin from '../socialLogin/GoogleLogin';
import useAuth from '../../../customHooks/useAuth';
import axios from 'axios';


const Register = () => {
    // react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // authentication
    const { registerUser, updateUserProfile } = useAuth();

    const handleRegistration = (data) => {

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                const profileImg = data.photo[0];

                // Create FormData
                const formData = new FormData();
                formData.append("image", profileImg);

                // Upload to ImgBB
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_api_key}`;
                axios.post(image_API_URL, formData)
                    .then(res => {
                        console.log('after image upload ', res.data.data.url);

                        //update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('update profile successfully');
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1 className="auth_title">Create an Account</h1>
            <p>Register with ZapShift</p>

            <form onSubmit={handleSubmit(handleRegistration)} className="fieldset my-3">
                <label htmlFor="imageUpload" className="cursor-pointer inline-block w-10 mb-3">
                    <img src={image_upload} alt="image upload icon" className="w-10 hover:scale-110 transition-transform duration-200" />
                </label>
                <input id="imageUpload" type="file" accept="image/*" className="hidden"
                    {...register('photo', { required: true })}
                />
                {errors.photo?.type == "required" && (
                    <p role="alert" className='text-red-400'>User photo is required</p>
                )}

                <label className="auth_label">Name</label>
                <input type="name" className="input w-full placeholder:text-placeholder_color" placeholder="Name"
                    {...register('name', { required: true })}
                />
                {errors.email?.type === "required" && (
                    <p role="alert" className='text-red-400'>Email is required</p>
                )}

                <label className="auth_label">Email</label>
                <input type="email" className="input w-full placeholder:text-placeholder_color" placeholder="Email"
                    {...register('email', { required: true })}
                />
                {errors.email?.type === "required" && (
                    <p role="alert" className='text-red-400'>Email is required</p>
                )}

                <label className="auth_label">Password</label>
                <input type="password" className="input w-full placeholder:text-placeholder_color" placeholder="Password"
                    {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/ })}
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

                <button className="btn form_btn">Register</button>
                <p className="text-auth_secondary_text">Already have an account? <NavLink to={'/login'} className='link-hover text-link_color'>Login</NavLink></p>
                <p className="text-auth_secondary_text mx-auto">Or</p>
                <GoogleLogin name='Register'></GoogleLogin>
            </form>
        </div>
    );
};

export default Register;