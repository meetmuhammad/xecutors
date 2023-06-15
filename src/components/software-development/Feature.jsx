import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
const teams = team_data.filter(team => team.about_p);

const FeatureSection = () => {
  return (
    <section className='w-full relative px-[20px] pb-[50px] sm:py-[100px] md:py-[100px] xl:py-[150px] mt-[-80px] lg:mt-0'>
        <div className='max-w-[844px] w-full mx-auto relative z-2'>
            <div className='w-full flex text-center flex-col gap-[24px]'>
                <h2 className='text-[#00ADB5] text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] leading-[38px] sm:leading-[50px] md:leading-[60px] xl:leading-[77px] m-0'>Future-Proof Your Business</h2>
                <p className='text-[16px] md:text-[18px] text-[#222831] leading-[22px] md:leading-[26px]'>Our custom software development services are designed to be scalable, flexible, and adaptable, helping your business stay ahead of the competition and navigate changes in the market.</p>
            </div>
            
        </div>
    </section>
  );
};

export default FeatureSection;