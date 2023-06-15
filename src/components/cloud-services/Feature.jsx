import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import cloudgroup from '../../../public/assets/img/cloud-services/cloud-group.svg'
import Scalability from '../../../public/assets/img/cloud-services/Scalability.svg'
import Reliability from '../../../public/assets/img/cloud-services/Reliability.svg'
import Accessibility from '../../../public/assets/img/cloud-services/Accessibility.svg'
import Security from '../../../public/assets/img/cloud-services/Security.svg'
import Costeffectiveness from '../../../public/assets/img/cloud-services/Cost-effectiveness.svg'
const teams = team_data.filter(team => team.about_p);

const Feature = () => {
  return (
    <section className='w-full relative cloud-feature-gradient px-[20px] py-[113px]'>
       
        <div className='max-w-[1284px] w-full mx-auto flex-col items-start'>
            <div className='w-full text-center'>
                <h2 className='text-[#00ADB5] text-[60px] leading-[77px] mb-[15px]'>Features and Benefits</h2>
                <p className='max-w-[844px] w-full mx-auto text-[#222831] text-[18px] leading-[26px]'>Our Cloud Computing services come with a range of features and benefits designed to help businesses optimize their IT infrastructure and achieve their goals. These include:</p>
            </div>


            <div className='w-full relative min-h-[1000px] mt-[100px]'>
                <div className='w-full flex justify-center'>
                    <div className='max-w-[334px] w-full flex flex-col justify-center gap-[5px] text-center'>
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5]'>Scalability</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831]'>Our Cloud Computing solutions can easily scale up or down based on your business's changing needs</p>
                        <div className='relative'>
                            <Image src={Scalability} alt="" />
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-between items-start mt-[40px] h-[550px]'>
                    <div className='max-w-[334px] relative w-full flex flex-col justify-center gap-[5px] text-center'>
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5]'>Reliability</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831]'>Our cloud computing solutions are highly reliable and ensure uninterrupted business operations.</p>
                        <div className='absolute right-[-60px] bottom-[0px]'>
                            <Image src={Reliability} alt="" />
                        </div>
                    </div>
                    <div className='max-w-[334px] relative w-full flex flex-col justify-center gap-[5px] text-center'>
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5]'>Accessibility</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831]'>With Cloud Computing, you can access your data and applications from anywhere, at any time, and from any device.</p>
                        <div className='absolute left-[-60px] bottom-[0px]'>
                            <Image src={Accessibility} alt="" />
                        </div>
                    </div>
                </div>


                <div className='max-w-[1136px] mx-auto w-full flex justify-between'>
                    <div className='max-w-[334px] relative w-full flex flex-col justify-center gap-[5px] text-center'>
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5]'>Security</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831]'>Our cloud computing solutions are highly reliable and ensure uninterrupted business operations.</p>
                        <div className='absolute right-[10px] top-[-40px]'>
                            <Image src={Security} alt="" />
                        </div>
                    </div>
                    <div className='max-w-[334px] relative w-full flex flex-col justify-center gap-[5px] text-center'>
                        <h4 className='text-[24px] leading-[30px] text-[#00ADB5]'>Cost-effectiveness</h4>
                        <p className='text-[16px] leading-[26px] text-[#222831]'>With Cloud Computing, you can access your data and applications from anywhere, at any time, and from any device.</p>
                        <div className='absolute left-[-0px] top-[-50px]'>
                            <Image src={Costeffectiveness} alt="" />
                        </div>
                    </div>
                </div>

                <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none'>
                    <div className='relative'><Image src={cloudgroup} alt="" /></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Feature;