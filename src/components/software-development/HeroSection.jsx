import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import Heroimg from '../../../public/assets/img/software-development/Hero-img.svg'
const teams = team_data.filter(team => team.about_p);

const HeroSection = () => {
  return (
    <section className='w-full section-gradient relative section-bottom-shape overflow-hidden px-[20px] pt-[50px] lg:pt-[211px] pb-[200px] lg:pb-[120px]'>
        <div className='max-w-[1344px] w-full mx-auto relative z-2'>
            <div className='w-full flex flex-col-reverse lg:flex-row'>
            <div className='w-full lg:w-[60%]'>
                <h1 className='lg:flex lg:flex-col text-[30px] sm:text-[40px] md:text-[50px] xl:text-[64px] leading-[38px] sm:leading-[50px] md:leading-[60px] xl:leading-[80px] text-[#222831] mb-[30px]'>Bespoke Software Solutions to Streamline <b className='font-bold'>Your Business</b> </h1>
                <p className='lg:max-w-[577px] w-full text-[18px] text-[#222831] leading-[26px] m-0'>"Eliminate inefficiencies, improve workflows, and drive growth with our tailored custom software development services"</p>
                <div className='lg:max-w-[478px] h-[50px] w-full flex flex-col sm:flex-row bg-white mt-[30px] border border-black'>
                    <input className='w-full h-full border-0 py-[10px] px-[20px] text-[18px] text-[#222831]' type="text" placeholder='Enter your email' name="" id="" />
                    <button className='bg-[#222831] sm:max-w-[198px] py-[10px] w-full text-[18px] text-white'>Get started</button>
                </div>
            </div>
            <div className='max-w-[300px] mx-auto sm:max-w-full w-full lg:w-[40%] flex justify-center mb-[30px] lg:mb-0'>
                <Image src={Heroimg} alt="" />
            </div>
            </div>
            
        </div>
    </section>
  );
};

export default HeroSection;