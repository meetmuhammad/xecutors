import React from 'react'
import Link from 'next/link'

import magicIcon from "../../../../public/assets/img/svg/magiv-link.svg";
import googleIcon from "../../../../public/assets/img/svg/GoogleOriginal.svg";
import appleicon from "../../../../public/assets/img/svg/apple-icon.svg";
import gitIcon from "../../../../public/assets/img/svg/gitIcon.svg";
import Image from 'next/image';
import useNHost from '../../../hooks/useNHost';

const LoginOptions = ({method, setMethod}) => {
    const nhost = useNHost();


  const signInWithGoogle = async (email) => {
    nhost.auth.signIn({
      provider: "google",
    });
  };
  
  const signInWithGithub = async (email) => {
    nhost.auth.signIn({
      provider: "github",
    });
  };
  
  const signInWithLinkedin = async (email) => {
    nhost.auth.signIn({
      provider: "linkedin",
    });
  };
  return (
    <div className="max-w-[400px] w-full mt-[15px]">
        <p className="text-[#000] text-[32px]  text-center mt-5">OR</p>
        <ul className="w-full items-center flex flex-col gap-[24px]">
            {method !== "magicLink" && (
                <li className="w-full h-[48px] bg-[#EFEFEF] rounded-[8px] text-center cursor-pointer" onClick={() => setMethod("magicLink")}>
                    <a className="w-full h-full flex items-center justify-center font-bold text-[16px] text-[#231F20] gap-[10px]">
                    <Image src={magicIcon} alt="" /> Continue with Magic Link
                    </a>
                </li>
            )}
            {method !== "login" && (
                <li className="w-full h-[48px] bg-[#EFEFEF] rounded-[8px] text-center cursor-pointer" onClick={() => setMethod("login")}>
                    <a className="w-full h-full flex items-center justify-center font-bold text-[16px] text-[#231F20] gap-[10px]">
                    <Image src={magicIcon} alt="" /> Continue with Email/Password
                    </a>
                </li>
            )}
            <li className="w-full h-[48px] bg-[#E0EFFE] rounded-[8px] text-center cursor-pointer" onClick={signInWithGoogle}>
                <a className="w-full h-full flex items-center justify-center font-bold text-[16px] text-[#231F20] gap-[10px]">
                <Image src={googleIcon} alt="" /> Continue with Google
                </a>
            </li>
            <li className="w-full h-[48px] bg-[#EFEFEF] rounded-[8px] text-center cursor-pointer" onClick={signInWithLinkedin} >
                <a className="w-full h-full flex items-center justify-center font-bold text-[16px] text-[#231F20] gap-[10px]">
                <Image src={appleicon} alt="" /> Continue with linkedin
                </a>
            </li>
            <li className="w-full h-[48px] bg-[#E0EFFE] rounded-[8px] text-center cursor-pointer" onClick={signInWithGithub}>
                <a className="w-full h-full flex items-center justify-center font-bold text-[16px] text-[#231F20] gap-[5px]">
                <Image src={gitIcon} alt="" /> Continue with Github
                </a>
            </li>
        </ul>
    </div>
  )
}

export default LoginOptions