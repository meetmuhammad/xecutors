import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import cc from '../../../public/assets/img/cloud-services/cc.png'
const teams = team_data.filter(team => team.about_p);

const HeroSection = () => {
  return (
    <section className='w-full min-h-screen relative flex items-center justify-center px-[20px] py-[100px] cloud-gradient'>
        <div className='max-w-[1280px] w-full mx-auto'>
            <div className='w-full flex items-center justify-between flex-col-reverse lg:flex-row gap-[50px]'>
                <div className='w-full lg:w-[60%]'>
                    <h5 className='text-[40px] leading-[45px] text-[#222831]'>Boost Your Business Productivity with</h5>
                    <h1 className='text-[35px] md:text-[40px] lg:text-[45px] xl:text-[64px] text-[#00ADB5] font-bold mb-[15px]'>Scalable and Secure Cloud Solutions</h1>
                    <p className='text-[16px] md:text-[18px] leading-[26px] text-[#222831] font-medium'>Unlock the Power of the Cloud Streamline your IT infrastructure and accelerate business growth with Xecutors' customized cloud solutions.
</p>
                    <div className='lg:max-w-[478px] md:h-[50px] w-full flex flex-col sm:flex-row bg-white mt-[50px] border border-black'>
                    <input className='w-full h-full border-0 py-[10px] px-[20px] text-[18px] text-[#222831]' type="text" placeholder='Enter your email' name="" id="" />
                    <button className='bg-[#222831] sm:max-w-[198px] py-[10px] w-full text-[18px] text-white'>Get started</button>
                </div>
                </div>
                <div className='max-w-[300px] md:max-w-[400px] lg:max-w-full w-full lg:w-[35%]'> <Image src={cc} alt="" /> </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;