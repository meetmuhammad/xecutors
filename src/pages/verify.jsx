"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import useNHost from '../hooks/useNHost';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();


const Verify =  () => {
  const router = useRouter();
  const nhost = useNHost();
  useEffect(() => {
    verifyAuth();
  },[])

  const verifyAuth =  () => {
    let token, user;
    token =  nhost.auth.getAccessToken();
    user =  nhost.auth.getUser();
    nhost.auth.onTokenChanged(() => {
      token =  nhost.auth.getAccessToken();
      user =  nhost.auth.getUser();
      console.log("token =====>", user, token);
      if(token) {
        cookies.set('accessToken', token )
    
        router.push('/admin')
      }else{
        toast.error("Unverified User");
        setTimeout(() => {
          //  router.push("/");
        }, 2000);
      }
    })
  }




  return (
    <div>Verify</div>
  )
}

export default Verify


