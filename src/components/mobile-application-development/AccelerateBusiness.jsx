import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import sectionimg1 from '../../../public/assets/img/mobile-application-development/section-img1.png'
const teams = team_data.filter(team => team.about_p);

const AccelerateBusiness = () => {
  return (
    <section id='NextSection' className='w-full relative overflow-hidden px-[20px] py-[80px] lg:py-[120px]'>
        <div className='max-w-[1246px] w-full mx-auto'>
            <div className='w-full flex flex-col-reverse md:flex-row items-center gap-[50px] justify-between'>
                <div className='md:max-w-[500px] lg:max-w-[609px]'>
                    <h2 className='text-[30px] leading-[30px] lg:text-[38px] lg:leading-[38px] xl:text-[48px] xl:leading-[46px] text-[#00ADB5] flex flex-col mb-[30px]'>Accelerate Your Business <b>Growth</b></h2>
                    <p className='text-[#222831] text-[18px] leading-[22px] xl:text-[24px] xl:leading-[30px] mb-[30px]'>Our custom mobile app development services are designed to improve your business performance by delivering intuitive, user-friendly, and scalable mobile solutions.</p>
                    <a className='bg-[#EEEEEE] inline-flex items-center justify-center min-w-[198px] h-[50px] text-[18px] text-[#222831] text-center' href="#">Get started</a>
                </div>
                <div className='w-auto'>
                    <Image src={sectionimg1} alt="" />
                </div>
            </div>
        </div>
       
    </section>
  );
};

export default AccelerateBusiness;