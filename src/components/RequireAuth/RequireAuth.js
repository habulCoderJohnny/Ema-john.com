import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    // RequireAuth children is:Inventory component 
    // getting user 
    const [user] = useAuthState(auth);
    const location = useLocation();
    //jodi visitor login kora na thake then login e pathabo 
    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;