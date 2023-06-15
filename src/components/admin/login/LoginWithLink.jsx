import React, { useState } from "react";
import useNHost from "../../../hooks/useNHost";
import {toast} from 'react-toastify'

const LoginLink = () => {
  const nhost = useNHost();
  const [email, setEmail] = useState("");
  const signIn = async (email) => {
    const res = await nhost.auth.signIn({
      email: email,
    });
    console.log("data", res);
    if (!res.error) {
      toast.success("A magic link has been sent to your email address");
    } else {
      toast.error(res.error.message);
    }
  };
  return (
    <div className="max-w-[400px] w-full mx-auto flex flex-col gap-[32px]">
        <h4 className="text-[#172B4D] text-[28px] m-0 font-bold">Login with Link</h4>
        <form className="flex flex-col gap-[24px]" action="">
            <div className="flex flex-col gap-[12px]">
                <label className="text-[16px] text-[#172B4D] m-0 leading-[normal]" htmlFor="">Email</label>
                <input className="w-full rounded-[8px] border border-[#172B4D] px-[16px] py-[12px] m-0" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
            </div>

            <button className="mt-[10px] w-full bg-[#222831] rounded-[8px] h-[52px] text-white text-[16px]" type="button" onClick={() => signIn(email)}>Send Email</button>
        </form>
    </div>
  );
};

export default LoginLink;
