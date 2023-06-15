import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import mad from '../../../public/assets/img/mobile-application-development/mad.png'
import MoveBottom from '../../../public/assets/img/mobile-application-development/move-bottom.svg'
const teams = team_data.filter(team => team.about_p);

const HeroSection = () => {
  return (
    <section className='w-full hero-shape-bg bg-cover xl:min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-[20px]  py-[100px]'>
        <div className='max-w-[1350px] w-full mx-auto'>
            <div className='w-full flex items-center flex-col-reverse lg:flex-row gap-[50px]'>
                <div className='w-full lg:w-[65%]'>
                    <h1 className='text-[35px] md:text-[40px] lg:text-[45px] xl:text-[64px] text-[#EEEEEE] font-bold m-0'>Mobile App Development</h1>
                    <h3 className='text-[30px] md:text-[40px] lg:text-[45px] xl:text-[64px] text-[#EEEEEE] m-0'> <em>to Transform Your Business</em> </h3>
                    <p className='text-[16px] md:text-[18px] leading-[28px] text-[#EEEEEE]'>Enhance customer engagement, streamline operations, and grow your business with our bespoke mobile app development services.</p>
                    <div className='lg:max-w-[478px] md:h-[50px] w-full flex flex-col sm:flex-row bg-white mt-[50px] border border-black'>
                    <input className='w-full h-full border-0 py-[10px] px-[20px] text-[18px] text-[#222831]' type="text" placeholder='Enter your email' name="" id="" />
                    <button className='bg-[#222831] sm:max-w-[198px] py-[10px] w-full text-[18px] text-white'>Get started</button>
                </div>
                </div>
                <div className='max-w-[300px] md:max-w-[400px] lg:max-w-full w-full lg:w-[35%]'> <Image src={mad} alt="" /> </div>
            </div>
        </div>
        <div className='w-[48px] h-[48px] absolute left-0 right-0 bottom-[20px] mx-auto'><a href="#NextSection"> <Image src={MoveBottom} alt="" /> </a></div>
    </section>
  );
};

export default HeroSection;