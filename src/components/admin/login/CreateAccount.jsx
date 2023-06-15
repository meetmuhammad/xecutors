import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import useNHost from "../../../hooks/useNHost";

const CreateAccount = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
  const nhost = useNHost()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })


  const handleUser = e => {
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const signup = async () => {
    console.log(user);
    const res = await nhost.auth.signUp({
        email: user.email,
        password: user.password
      })
      console.log(res);
    if(res.error){
        toast.error(res.error.message)
    }else if(res.session !== null){
        router.push('/verify');
    }
  }
  return (
    <div className="max-w-[400px] w-full mx-auto flex flex-col gap-[32px]">
        <h4 className="text-[#172B4D] text-[28px] m-0 font-bold">Create an account</h4>
        <form className="flex flex-col gap-[24px]" action="">
            <div className="flex flex-col gap-[12px]">
                <label className="text-[16px] text-[#172B4D] m-0 leading-[normal]" htmlFor="">Email</label>
                <input className="w-full rounded-[8px] border border-[#172B4D] px-[16px] py-[12px] m-0" 
                name="email"
                value={user.email}
                onChange={e => handleUser(e)}
                type="text" placeholder="Email Address" />
            </div>

            <div className="flex flex-col gap-[12px]">
                <label className="text-[16px] text-[#172B4D] m-0 leading-[normal] flex justify-between items-center" htmlFor="">Password <a className="text-[#007DFA]" href="#">Forgot？</a> </label>
                <div className="w-full relative">
                    <input className="w-full rounded-[8px] border border-[#172B4D] px-[16px] py-[12px] m-0"
                    name="password"
                    value={user.password}
                    onChange={e => handleUser(e)}
                     type={show ? `text` : `password`} placeholder="Enter your password" />
                    <button className="absolute right-[15px] top-[14px]" type="button" onClick={() => setShow(!show)}>                                
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z" stroke="#172B4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#172B4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            <button className="mt-[10px] w-full bg-[#222831] rounded-[8px] h-[52px] text-white text-[16px]"  
            onClick={signup}
            type="button">Create account</button>
        </form>
    </div>
  );
};

export default CreateAccount;
