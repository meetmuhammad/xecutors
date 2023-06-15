import React, { useState } from "react";
import Image from "next/image";
import LoginVector from "../../../../public/assets/img/svg/login-vector.png"
import CreateAccount from "./CreateAccount";
import LoginForm from "./LoginForm";
import LoginLink from "./LoginWithLink";
import LoginOptions from "./LoginOptions";


const DefaultLogin = () => {
  const [method, setMethod] = useState('login');
  return (
    <div className="w-full flex flex-wrap">
        <div className="w-full md:w-[50%] hidden min-h-screen bg-white relative custom-vector-section overflow-hidden md:flex justify-center items-center md:py-[50px] px-[50px]">
            <div className="max-w-[400px]">
            <Image width="" src={LoginVector} alt="" />
            </div>
        </div>
        <div className="w-full md:w-[50%] min-h-screen bg-[#F7F7F7] flex flex-col items-center justify-center  py-[50px] md:py-[100px] px-[50px]">
          {method === 'login'
            ? <LoginForm method={method} setMethod={setMethod} />
            : method === "magicLink"
            ? <LoginLink />
            : method === "signup"
            ? <CreateAccount />
            : ""
          }
          <LoginOptions method={method} setMethod={setMethod} />
        </div>
    </div>
  );
};

export default DefaultLogin;
