import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthProvider = ({children} ) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email,password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUSer = () => {
         setLoading(true);
        return signOut(auth);
    }

    onAuthStateChanged(auth ,(currentUser) => {
        if(currentUser){
            console.log('inside observer: if', currentUser)
        }else{
            console.log('inside observer: else', currentUser)
        }
    })

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('current user in Auth state change', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    })

    const authInfo = {
        user,
        loading,
    createUser,
    signInUser,
    signOutUSer,
    }

    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;