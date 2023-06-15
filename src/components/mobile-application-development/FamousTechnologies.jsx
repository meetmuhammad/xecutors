import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import modelfuturistic from '../../../public/assets/img/mobile-application-development/model-futuristic.png'
const teams = team_data.filter(team => team.about_p);

const FamousTechnologies = () => {
  return (
    <section className='w-full relative overflow-hidden pt-[120px]'>
        <div className='max-w-[1246px] w-full mx-auto px-[20px]'>
            <div className='w-full flex flex-col items-start gap-[50px]'>
                <div className='w-full'>
                    <h2 className='text-[30px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[40px]  text-[#00ADB5] flex flex-col mb-[30px]'>Our Famous <b className='text-[48px]'>Technologies</b></h2>
                    </div>
            </div>
        </div>

        <div className='max-w-[1600px] w-full mx-auto flex mt-[50px] flex-col lg:flex-row'>
            <div className='max-w-[350px] lg:max-w-[450px] xl:max-w-[536px] w-full modelfuturistic-bg bg-cover bg-center hidden lg:flex'></div>
            <div className='w-full min-h-full bg-[#EEEEEE] px-[50px] xl:px-[80px] py-[50px]'>
                <div className='flex flex-wrap mx-[-25px]'>
                    <div className='w-full sm:w-1/2 px-0 sm:p-[20px] xl:p-[25px] mb-[20px] sm:mb-0'>
                        <div className='w-full h-full sm:min-h-[347px] bg-[#F9F9F9] px-[22px] py-[40px]'>
                            <h4 className='text-[20px] leading-[24px] xl:text-[24px] xl:leading-[30px] text-[#00ADB5] mb-[10px] sm:min-h-[65px]'>Augmented Reality (AR) and Virtual Reality (VR)</h4>
                            <p className='text-[#222831] text-[12px] leading-[20px] m-0'>AR and VR are being used in custom mobile app development to create immersive experiences that enhance customer engagement and boost sales.</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 sm:p-[20px] xl:p-[25px] mb-[20px] sm:mb-0'>
                        <div className='w-full h-full sm:min-h-[347px] bg-[#F9F9F9] px-[22px] py-[40px]'>
                            <h4 className='text-[20px] leading-[24px] xl:text-[24px] xl:leading-[30px] text-[#00ADB5] mb-[10px] sm:min-h-[65px]'>Internet of Things (IoT):</h4>
                            <p className='text-[#222831] text-[12px] leading-[20px] m-0'>IoT involves connecting devices and sensors to the internet to collect data and enable automation. It's used in custom mobile app development to create smart home, healthcare, and industrial automation applications.</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 sm:p-[20px] xl:p-[25px] mb-[20px] sm:mb-0'>
                        <div className='w-full h-full sm:min-h-[347px] bg-[#F9F9F9] px-[22px] py-[40px]'>
                            <h4 className='text-[20px] leading-[24px] xl:text-[24px] xl:leading-[30px] text-[#00ADB5] mb-[10px] sm:min-h-[65px]'>Artificial Intelligence (AI) and Machine Learning (ML)</h4>
                            <p className='text-[#222831] text-[12px] leading-[20px] m-0'>AI and ML are being used in custom mobile app development to create intelligent applications that can learn from user behavior and data to automate tasks, personalize experiences, and make predictions.</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 sm:p-[20px] xl:p-[25px] mb-[20px] sm:mb-0'>
                        <div className='w-full h-full sm:min-h-[347px] bg-[#F9F9F9] px-[22px] py-[40px]'>
                            <h4 className='text-[20px] leading-[24px] xl:text-[24px] xl:leading-[30px] text-[#00ADB5] mb-[10px] sm:min-h-[65px]'>Beacon Technology</h4>
                            <p className='text-[#222831] text-[12px] leading-[20px] m-0'>AR and VR are being used in custom mobile app development to create immersive experiences that enhance customer engagement and boost sales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  );
};

export default FamousTechnologies;