import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/FireBase.config';



export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {

    const [user,setUser] = useState({});
    const  [loading,setLoading] = useState(true);

const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password)
}

const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password)
}

useEffect(()=>{
  return  onAuthStateChanged(auth,(user) =>{
       setUser(user)
       setLoading(false)
     })


    },[])
    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;