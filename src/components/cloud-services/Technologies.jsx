import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import beautifuloptical from '../../../public/assets/img/cloud-services/beautiful-optical.png'
const teams = team_data.filter(team => team.about_p);

const Technologies = () => {
  return (
    <section className='w-full relative px-[20px] pt-[113px]'>
      
        <div className='max-w-[1280px] w-full mx-auto'>
            <div className='w-full flex gap-[75px]'>
                <div className='max-w-[480px] w-full'>
                    <Image src={beautifuloptical} alt="" />
                </div>
            <div className='w-full'>
                <h2 className='text-[#00ADB5] text-[60px] leading-[77px] mb-[15px]'>Technologies We Use</h2>
                <p className='text-[#222831] text-[18px] leading-[26px] mb-[40px]'>We work with various cutting-edge technologies to provide our clients with the best possible Cloud Computing solutions. These include:</p>
                <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <h4 className='text-[24px] leading-[30px] text-[#00ADB5] m-0'>Amazon Web Services (AWS):</h4>
                    <p className='text-[16px] leading-[26px] text-[#222831]'>We leverage the power of AWS to deliver reliable and scalable Cloud Computing solutions to our clients.</p>
                </div>
                <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <h4 className='text-[24px] leading-[30px] text-[#00ADB5] m-0'>Microsoft Azure:</h4>
                    <p className='text-[16px] leading-[26px] text-[#222831]'>Our team is highly experienced in designing and implementing Cloud Computing solutions using Microsoft Azure.</p>
                </div>
                <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <h4 className='text-[24px] leading-[30px] text-[#00ADB5] m-0'>Google Cloud Platform (GCP):</h4>
                    <p className='text-[16px] leading-[26px] text-[#222831]'>We also work with GCP to provide businesses with fast, flexible, and cost-effective Cloud Computing solutions.</p>
                </div>
                <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <h4 className='text-[24px] leading-[30px] text-[#00ADB5] m-0'>Cloudflare Workers:</h4>
                    <p className='text-[16px] leading-[26px] text-[#222831]'>We're experts in development with Cloudflare Workers, a powerful tool for building fast, secure, and scalable applications. With Workers, we can write and run code on Cloudflare's global network, delivering cost-effective and responsive applications. Cloudflare's APIs and monitoring tools make managing and optimizing our applications in real-time easy.</p>
                </div>
            </div>
            </div>
            
           
        </div>
    </section>
  );
};

export default Technologies;