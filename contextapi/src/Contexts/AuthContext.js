import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setLoggedIn]= useState(false);
    const changeAuthStatus=()=>{setLoggedIn(!isLoggedIn)};
    return (  
        <AuthContext.Provider value={{isLoggedIn, changeAuthStatus}}>
           {children}
       </AuthContext.Provider>
    );
}
export default AuthContextProvider;
