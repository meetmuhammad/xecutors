import React from 'react';
import Image from "next/image";
import customcoding from '../../../public/assets/img/custom-web-application/custom-coding.svg'
import responsivedesign from '../../../public/assets/img/custom-web-application/responsive-design.svg'
import userfriendlyinterface from '../../../public/assets/img/custom-web-application/user-friendly-interface.svg'
import scalability from '../../../public/assets/img/custom-web-application/scalability.svg'
import security from '../../../public/assets/img/custom-web-application/security.svg'
import supportmaintenance from '../../../public/assets/img/custom-web-application/support-maintenance.svg'
import Qualityassurance from '../../../public/assets/img/custom-web-application/Quality-assurance.svg'
import Integration from '../../../public/assets/img/custom-web-application/Integration.svg'

const OurWorkCycle = () => {
  return (
    <section className='w-full relative flex items-center justify-center overflow-hidden px-[20px] py-[110px]'>
        <div className='max-w-[1288px] w-full mx-auto relative z-2'>
            <div className='w-full flex gap-[50px]'>
                <div className='w-full flex flex-col gap-[77px]'>
                    <h1 className='mb-[30px] text-[#00ADB5] text-[60px]'>Our Work Cycle</h1>
                    <div className='w-full flex flex-col gap-[20px]'>
                        <h4 className='text-[40px] text-[#00ADB5] font-light m-0'>Discovery and Planning:</h4>
                        <p className='text-[24px] leading-[30px] text-[#222831] m-0'>During the discovery and planning phase, your team will work closely with the client to understand their needs and requirements. This involves gathering information about their business, target audience, and goals and identifying any potential technical constraints.</p>
                    </div>
                </div>
                <div className='max-w-[300px] w-full'>
                    <ul className='flex flex-col'>
                        <li className='flex relative pb-[100px] text-[18px] leading-[26px] text-[#A7A7A7] pl-[25px]'>
                            <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00ADB5] to-[#fff]'> <div className='w-[16px] h-[16px] bg-[#00ADB5] rounded-full absolute left-[-6px] top-0'></div> </div>
                            Discovery and Planning
                        </li>
                        <li className='flex relative pb-[100px] text-[18px] leading-[26px] text-[#A7A7A7] pl-[25px]'>
                            <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-[#EEEEEE]'> <div className='w-[16px] h-[16px] bg-[#EEEEEE] rounded-full absolute left-[-6px] top-0'></div> </div>
                            Design and Development
                        </li>
                        <li className='flex relative pb-[100px] text-[18px] leading-[26px] text-[#A7A7A7] pl-[25px]'>
                            <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-[#EEEEEE]'> <div className='w-[16px] h-[16px] bg-[#EEEEEE] rounded-full absolute left-[-6px] top-0'></div> </div>
                            Testing and Quality Assurance
                        </li>
                        <li className='flex relative pb-[100px] text-[18px] leading-[26px] text-[#A7A7A7] pl-[25px]'>
                            <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-[#EEEEEE]'> <div className='w-[16px] h-[16px] bg-[#EEEEEE] rounded-full absolute left-[-6px] top-0'></div> </div>
                            Deployment and Integration
                        </li>
                        <li className='flex relative text-[18px] leading-[26px] text-[#A7A7A7] pl-[25px]'>
                            <div className='absolute left-0 top-0 w-[3px] bg-[#EEEEEE]'> <div className='w-[16px] h-[16px] bg-[#EEEEEE] rounded-full absolute left-[-6px] top-0'></div> </div>
                            Training and Support
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OurWorkCycle;