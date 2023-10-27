import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../authConfig/AuthConfig";

export const authContext = createContext()

const AuthProviders = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignInWithPopup = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userlogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

   useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
       });

       return () => {
           unSubscribe()
       }

   },[])

    


    const authInfo = { 
        user, 
        loading, 
        googleSignInWithPopup,
        registerUser,
        userLogIn,
        userlogOut
    };

    return (
        <>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
};

