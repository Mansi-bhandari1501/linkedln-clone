import { Children } from "react";
import { useState, useEffect,useContext, crreateContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) =>{

    const[auth,setAuth] = useState({
        user:"null",
        token:""
    })
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
// CUSTOM  HOOKS
const useAuth = () => useContext(AuthContext)
export  {useAuth,AuthProvider}