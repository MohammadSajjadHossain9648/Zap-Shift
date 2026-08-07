import React from 'react';
import google from '../../../assets/google.png';
import useAuth from '../../../customHooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const googleLogin = ({ name = 'Login' }) => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='fieldset'>
            <button onClick={handleGoogleSignIn} className="btn form_btn2">
                <img src={google} alt="google icon" className='w-6' />
                {name} with google
            </button>
        </div>
    );
};

export default googleLogin;