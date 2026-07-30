import React from 'react';
import google from '../../../assets/google.png';

const googleLogin = ({ name = 'Login' }) => {
    return (
        <div className='fieldset'>
            <button className="btn form_btn2"> <img src={google} alt="google icon" className='w-6' />{name} with google</button>
        </div>
    );
};

export default googleLogin;