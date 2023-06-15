"use client";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import useNHost from '../../../hooks/useNHost'
import Cookies from 'universal-cookie';
 

const AdminAuth = ({children}) => {
    const cookies = new Cookies();
    const router = useRouter();
    const nhost = useNHost();
    const [show, setShow] = useState(false);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        let tk = cookies.get("accessToken");
        if(tk){
            setToken(tk);
        }else{
            router.push("/login");
        }
       
    },[])

//    useEffect(() => {
//         checkAuth();
//    },[])

//    const checkAuth = () => {
//     setToken(nhost.auth.getAccessToken())
//     setIsAuthenticated(nhost.auth.isAuthenticated())
//     let t = nhost.auth.getAccessToken();
//     let a = nhost.auth.isAuthenticated();
//     console.log(t, a);

//     if(t || a){
//         setShow(true);
//     }else{
//         router.push("/login")
//     }

//     nhost.auth.onTokenChanged(() => {
//         console.log("token changed")
//         setToken(nhost.auth.getAccessToken())
//         setIsAuthenticated(nhost.auth.isAuthenticated())
//         console.log(token, isAuthenticated);
//         if(!token || !isAuthenticated){
            
//         }else{
//             setShow(true);
//         }
//     })

//    }

    
    return (
        <>
            {token && children}
        </>
    )


}

export default AdminAuth