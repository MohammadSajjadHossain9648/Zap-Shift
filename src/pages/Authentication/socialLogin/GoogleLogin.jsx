import React from 'react';
import google from '../../../assets/google.png';
import useAuth from '../../../customHooks/useAuth';

const googleLogin = ({ name = 'Login' }) => {
    const { signInGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='fieldset'>
            <button onClick={handleGoogleSignIn} className="btn form_btn2"> <img src={google} alt="google icon" className='w-6' />{name} with google</button>
        </div>
    );
};

export default googleLogin;