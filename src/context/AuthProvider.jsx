import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // register page
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login page
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // googleLogin page
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        registerUser,
        loginUser,
        signInGoogle
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;