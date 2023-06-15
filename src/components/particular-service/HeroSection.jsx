import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';

const teams = team_data.filter(team => team.about_p);

const HeroSection = () => {
  return (
    <div className='w-full px-[20px] py-[120px] relative bg-fixed particular-hero bg-cover bg-center min-h-screen flex items-center justify-center'>
      <div className='max-w-[1200px] w-full mx-auto py-[50px] md:py-[95px] px-[20px] border border-w-7 border-white'>
        <h1 className='text-white text-[38px] md:text-[60px] lg:text-[70px] md:leading-[50px] lg:leading-[80px] text-center font-bold mb-[22px]'>Corporate Identity Kit</h1>
        <p className='max-w-[577px] w-full mx-auto text-white text-center font-semibold custom-text-shadow leading-[26px] text-[18px]'>A better way to manage your sales, team, clients & marketing
— on a single platform. Powerful, affordable & easy.</p>
    <div className='max-w-[478px] h-[50px] w-full mx-auto flex flex-col sm:flex-row bg-white mt-[25px] md:mt-[45px] border border-black'>
        <input className='w-full h-full border-0 py-[10px] px-[20px] text-[18px] text-[#222831]' type="text" placeholder='Enter your email' name="" id="" />
        <button className='bg-[#222831] sm:max-w-[198px] py-[10px] w-full text-[18px] text-white'>Get started</button>
    </div>
      </div>
    </div>
  );
};

export default HeroSection;