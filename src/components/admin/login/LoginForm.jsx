import React, { useState } from 'react'
import Link from 'next/link'
import useNHost from '../../../hooks/useNHost'
import { toast } from 'react-toastify';
import PasswordEye from '../../svgs/PasswordEye'

const LoginForm = ({setMethod}) => {
    const nhost = useNHost();
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
      email: "",
      password: ""
    })

    const handleUser = e => {
      const {name, value} = e.target;
      setUser({...user, [name]:value})
    }

    const signIn = async () => {
      console.log(user)
      const res = await  nhost.auth.signIn({
            email: user.email,
            password: user.password
          })

      if(res.error){
        toast.error(res.error.message);
      }

          console.log(res)
    }
  return (
    <div className="max-w-[400px] w-full">
        <h4 className="text-[#172B4D] text-[28px] m-0 font-bold">
        Login to your account
      </h4>
      <form className="flex flex-col gap-[24px] mt-[30px]" action="">
        <div className="flex flex-col gap-[12px]">
          <label
            className="text-[16px] text-[#172B4D] m-0 leading-[normal]"
            htmlFor=""
          >
            Email
          </label>
          <input
            className="w-full rounded-[8px] border border-[#172B4D] px-[16px] py-[12px] m-0"
            type="text"
            name='email'
            value={user.email}
            onChange={e => handleUser(e)}
            placeholder="Email Address"
          />
        </div>

        <div className="flex flex-col gap-[12px]">
          <label
            className="text-[16px] text-[#172B4D] m-0 leading-[normal] flex justify-between items-center"
            htmlFor=""
          >
            Password
            <Link className="text-[#007DFA]" href="">
              
              <a>Forgot？</a>
            </Link>
          </label>
          <div className="w-full relative">
            <input
              className="w-full rounded-[8px] border border-[#172B4D] px-[16px] py-[12px] m-0"
              type={show ? `text` : `password`}
              name='password'
              value={user.password}
              onChange={e => handleUser(e)}
              placeholder="Enter your password"
            />
            <button className="absolute right-[15px] top-[14px]" type='button' onClick={() => setShow(!show)}>
              <PasswordEye />
            </button>
          </div>
        </div>

        <button
          className="mt-[10px] w-full bg-[#222831] rounded-[8px] h-[52px] text-white text-[16px]"
          type="button"
          onClick={signIn}
        >
          Login now
        </button>
        <p className="text-center text-[#172B4D] text-[16px] m-0">
          Don't have an account?
          <span className="font-bold cursor-pointer" onClick={() => setMethod('signup')}>
            <a>Sign up</a>
          </span>
        </p>
      </form>
    </div>
  )
}

export default LoginForm