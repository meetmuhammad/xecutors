import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import clouddata from '../../../public/assets/img/cloud-services/cloud-data.png'
const teams = team_data.filter(team => team.about_p);

const CloudComputer = () => {
  return (
    <section className='w-full relative'>
        <div className='w-full cloud-section-bg bg-cover bg-center flex items-center px-[20px] pt-[150px] pb-[180px]'>
            <div className='max-w-[860px] w-full mx-auto'>
                <div className='w-full flex flex-col gap-[16px]'>
                    <h2 className='text-center text-[36px] leading-[36px] md:text-[46px] md:leading-[46px] lg:text-[56px] lg:leading-[56px] xl:text-[64px] xl:leading-[85px] text-[#fff] font-bold custom-text-shadow m-0'> What is Cloud Computing?</h2>
                    <p className='text-center text-[16px] leading-[22px] lg:text-[18px] lg:leading-[26px] text-[#FFFFFF] m-0'>Cloud Computing is a technology that enables businesses to access IT resources and services through the internet, rather than relying on traditional on-premises hardware and software. With Cloud Computing, businesses can enjoy numerous benefits, including increased flexibility, scalability, and cost-effectiveness.</p>
                </div>
            </div>
        </div>

        <div className='max-w-[1280px] w-full mx-auto mt-[-60px] md:mt-[-100px] px-[20px]'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='w-full bg-[#F9F9F9] rounded-[30px] shadow p-[25px] flex gap-[56px] items-center'>
                        <div className='max-w-[342px] w-full'>
                        <Image src={clouddata} alt="" />
                        </div>
                        <div>
                        <h4 className='w-full text-[54px] leading-[54px] lg:text-[64px] lg:leading-[82px] text-[#00ADB5] m-0'>What We Do?</h4>
                        <p className='text-[18px] leading-[26px] text-[#222831] m-0'>At Xecutors, we specialize in providing customized Cloud Computing solutions tailored to meet the specific needs and objectives of each business we work with. We work closely with our clients to understand their unique goals and challenges, and develop a solution that aligns with their business objectives.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  );
};

export default CloudComputer;