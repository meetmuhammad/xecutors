import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import Heroimg from '../../../public/assets/img/custom-web-application/hero-shape.svg'
const teams = team_data.filter(team => team.about_p);

const HeroSection = () => {
  return (
    <section className='w-full min-h-screen relative flex items-center justify-center overflow-hidden px-[20px] py-[100px] bg-gradient-to-b from-[#EEEEEE] to-[#F9F9F900]'>
        <div className='absolute left-0 righ-0 top-0 bottom-0 flex justify-center pointer-events-none'>
            <Image width="2000" src={Heroimg} ></Image>
        </div>
        <div className='max-w-[800px] w-full mx-auto relative z-2'>
            <div className='w-full flex flex-col'>
                <h1 className='mb-[30px] flex flex-col justify-center items-center text-[#00ADB5] text-[40px] font-bold gap-[5px]'>  <small className='text-[30px] font-normal'> <em>Transform Your Business with</em> </small>
Custom Web Applications</h1>

<p className='mb-[20px] text-[16px] leading-[26px] text-[#393E46] text-center'>Build a web application tailored to your business needs, streamline your workflows, and improve your bottom line with our expert web application development services.</p>
<div className='max-w-[478px] h-[50px] w-full mx-auto flex flex-col sm:flex-row bg-white border border-black'>
        <input className='w-full h-full border-0 py-[10px] px-[20px] text-[18px] text-[#222831]' type="text" placeholder='Enter your email' name="" id="" />
        <button className='bg-[#222831] sm:max-w-[198px] py-[10px] w-full text-[18px] text-white'>Get started</button>
    </div>
            </div> 
        </div>
    </section>
  );
};

export default HeroSection;