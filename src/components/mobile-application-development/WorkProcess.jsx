import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
const teams = team_data.filter(team => team.about_p);

const WorkProcess = () => {
  return (
    <section id='NextSection' className='w-full relative overflow-hidden px-[20px] pb-[100px]'>
        <div className='max-w-[1246px] w-full mx-auto'>
            <div className='w-full flex flex-col items-start gap-[50px]'>
                <div className='w-full'>
                    <h2 className='text-[30px] leading-[30px] lg:text-[38px] lg:leading-[38px] xl:text-[48px] xl:leading-[46px] text-[#00ADB5] flex flex-col mb-[30px]'>Our work process make <b>your dream true</b></h2>
                    </div>
                    
                    <div className='w-full flex justify-center flex-wrap'>
                        <div className='w-full sm:w-1/2 md:w-1/3 mb-[15px] sm:mb-0'>
                            <div className='w-full h-full px-[14px] py-[23px] flex flex-col gap-[15px] items-start relative border-l border-b border-t border-r sm:border-r-0 md:border-t-0 border-[#000]'>
                                <h4 className='text-[#00ADB5] text-[24px] leading-[30px] m-0'>Discovery and Planning</h4>
                                <p className='max-w-[339px] w-full text-[14px] leading-[26px] text-[#222831]'>We start by understanding your business goals and requirements, developing a project plan, and defining the scope and budget of the project.</p>
                                <span className='text-[24px] leading-[30px] text-[#00ADB5] font-bold self-end'>01.</span>

                                <div className='w-[15px] h-[1px] bg-black absolute left-0 top-0 hidden md:block'></div>
                                <div className='absolute left-[-10px] right-[-10px] bottom-[-12px] hidden sm:flex justify-between items-center z-[99]'>
                                    <div className='opacity-[0] md:opacity-[1] w-[27px] h-[27px] bg-white border-l border-r border-t border-b border-[#000] rounded-full'></div>
                                    <div className='w-[27px] h-[27px] bg-white border-l border-r border-t border-b border-[#000] rounded-full'></div>
                                    <div className='w-[27px] h-[27px] rounded-full'></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 md:w-1/3 mb-[15px] sm:mb-0'>
                            <div className='w-full h-full px-[14px] py-[23px] flex flex-col gap-[15px] items-start relative border-l border-b border-t md:border-t-0 border-r md:border-r-0 border-[#000]'>
                                <h4 className='text-[#00ADB5] text-[24px] leading-[30px] m-0'>Design and Development</h4>
                                <p className='max-w-[339px] w-full text-[14px] leading-[26px] text-[#222831]'>Our team of developers and designers create a prototype and start developing your custom mobile app.</p>
                                <span className='text-[24px] leading-[30px] text-[#00ADB5] font-bold self-end'>02.</span>

                                <div className='w-[15px] h-[1px] bg-black absolute left-0 top-0 hidden md:block'></div>
                                <div className='absolute left-[-10px] right-[-10px] bottom-[-12px] hidden sm:flex justify-between items-center z-[99]'>
                                    <div className='w-[27px] h-[27px] bg-white border-l border-r border-t border-b border-[#000] rounded-full'></div>
                                    <div className='w-[27px] h-[27px] bg-white border-l border-r border-t border-b border-[#000] rounded-full'></div>
                                    <div className='w-[27px] h-[27px] rounded-full'></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 md:w-1/3 mb-[15px] sm:mb-0'>
                            <div className='w-full h-full px-[14px] py-[23px] flex flex-col gap-[15px] items-start relative border-l border-b border-t sm:border-t-0 border-r sm:border-r-0 border-[#000]'>
                                <h4 className='text-[#00ADB5] text-[24px] leading-[30px] m-0'>Discovery and Planning</h4>
                                <p className='max-w-[339px] w-full text-[14px] leading-[26px] text-[#222831]'>We use rigorous testing and quality assurance processes to ensure that your mobile app is secure, error-free, and delivers optimal performance.</p>
                                <span className='text-[24px] leading-[30px] text-[#00ADB5] font-bold self-end'>03.</span>

                                <div className='w-[15px] h-[1px] bg-black absolute left-0 top-0 hidden md:block'></div>
                                <div className='absolute left-[-10px] right-[-10px] bottom-[-12px] hidden sm:flex justify-between items-center z-[99]'>
                                    <div className='opacity-[0] md:opacity-[1] w-[27px] h-[27px] bg-white border-l border-r border-t border-b border-[#000] rounded-full'></div>
                                    <div className='w-[27px] h-[27px] bg-white border-l border-r border-t border-b border-[#000] rounded-full'></div>
                                    <div className='w-[27px] h-[27px] rounded-full'></div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2 md:w-1/3 mb-[15px] sm:mb-0'>
                            <div className='w-full h-full px-[14px] py-[23px] flex flex-col gap-[15px] items-start relative border-l border-b md:border-b-0 border-r md:border-r-0 border-t sm:border-t-0 border-[#000]'>
                                <h4 className='text-[#00ADB5] text-[24px] leading-[30px] m-0'>Deployment and Integration</h4>
                                <p className='max-w-[339px] w-full text-[14px] leading-[26px] text-[#222831]'>Once your mobile app has been thoroughly tested, we'll deploy it and integrate it with your existing systems to ensure seamless operation.</p>
                                <span className='text-[24px] leading-[30px] text-[#00ADB5] font-bold self-end'>04.</span>

                                <div className='w-[15px] h-[1px] bg-black absolute left-0 bottom-0 hidden md:block'></div>
                              
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 md:w-1/3'>
                            <div className='w-full h-full px-[14px] py-[23px] flex flex-col gap-[15px] items-start relative border-l border-r border-b border-t sm:border-t-0 md:border-b-0 border-[#000]'>
                                <h4 className='text-[#00ADB5] text-[24px] leading-[30px] m-0'>Training and Support</h4>
                                <p className='max-w-[339px] w-full text-[14px] leading-[26px] text-[#222831]'>We provide comprehensive training and support to ensure your team can use your new mobile app effectively.</p>
                                <span className='text-[24px] leading-[30px] text-[#00ADB5] font-bold self-end'>05.</span>

                                <div className='w-[15px] h-[1px] bg-black absolute left-0 bottom-0 hidden md:block'></div>
                                <div className='w-[15px] h-[1px] bg-black absolute right-[-15px] bottom-0 hidden md:block'></div>
                                <div className='w-[27px] h-[27px] bg-white border-l hidden sm:block md:hidden border-r border-t border-b border-[#000] rounded-full absolute right-[-10px] top-[-10px]'></div>
                               
                            </div>
                        </div>
                    </div>
            </div>
        </div>
       
    </section>
  );
};

export default WorkProcess;