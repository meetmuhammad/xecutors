import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import implementation from '../../../public/assets/img/cloud-services/implementation.png'
import implementation2 from '../../../public/assets/img/cloud-services/implementation2.png'
import design from '../../../public/assets/img/cloud-services/design.png'
import support from '../../../public/assets/img/cloud-services/support.png'
import lineshape from '../../../public/assets/img/cloud-services/line-shape.svg'
const teams = team_data.filter(team => team.about_p);

const OurWorkCycle = () => {
  return (
    <section className='w-full relative px-[20px] py-[113px]'>
        <div className='absolute top-[80px] left-0 right-0'>
            <Image src={lineshape} alt="" />
        </div>
        <div className='max-w-[1280px] w-full mx-auto flex-col items-start'>
            <div className='max-w-[747px] w-full'>
                <h2 className='text-[#00ADB5] text-[60px] leading-[77px] mb-[15px]'>Our Work Cycle</h2>
                <p className='text-[#222831] text-[18px] leading-[26px]'>Our work cycle is designed to ensure that our clients receive the highest quality service and the best possible outcome.</p>
            </div>
            <div className='max-w-[998px] w-full flex gap-[68px] ml-auto mt-[60px] relative'>
                <div className='w-1/2 flex flex-col gap-[68px]'>
                    <div className='w-full p-[29px] rounded-[34px] bg-[#F9F9F9] flex flex-col items-start shadow'>
                        <Image className='rounded-[25px]' src={implementation} alt="" />
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5] mt-[20px]'>Discovery</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831] m-0'>We work closely with you to understand your business requirements, goals, and challenges.</p>
                        <h6 className='text-[#00ADB5] text-[24px] leading-[30px] font-bold w-full text-right mt-[50px]'>01</h6>
                    </div>
                    <div className='w-full p-[29px] rounded-[34px] bg-[#F9F9F9] flex flex-col items-start shadow'>
                        <Image className='rounded-[25px]' src={implementation2} alt="" />
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5] mt-[20px]'>Implementation</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831] m-0'>We implement the Cloud Computing solution in your environment, ensuring a seamless transition.</p>
                        <h6 className='text-[#00ADB5] text-[24px] leading-[30px] font-bold w-full text-right mt-[50px]'>03</h6>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-[68px] mt-[100px]'>
                    <div className='w-full p-[29px] rounded-[34px] bg-[#F9F9F9] flex flex-col items-start shadow'>
                        <Image className='rounded-[25px]' src={design} alt="" />
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5] mt-[20px]'>Design</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831] m-0'>We create a customized Cloud Computing solution that is tailored to your business needs and objectives.</p>
                        <h6 className='text-[#00ADB5] text-[24px] leading-[30px] font-bold w-full text-right mt-[50px]'>02</h6>
                    </div>
                    <div className='w-full p-[29px] rounded-[34px] bg-[#F9F9F9] flex flex-col items-start shadow'>
                        <Image className='rounded-[25px]' src={support} alt="" />
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5] mt-[20px]'>Management and Support</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831] m-0'>We provide ongoing management and support to ensure the continued success of your Cloud Computing solution.</p>
                        <h6 className='text-[#00ADB5] text-[24px] leading-[30px] font-bold w-full text-right mt-[50px]'>04</h6>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  );
};

export default OurWorkCycle;