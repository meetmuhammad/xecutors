import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import Feature1 from '../../../public/assets/img/mobile-application-development/feature-icon1.svg'
import Feature2 from '../../../public/assets/img/mobile-application-development/feature-icon2.svg'
import Feature3 from '../../../public/assets/img/mobile-application-development/feature-icon3.svg'
import Feature4 from '../../../public/assets/img/mobile-application-development/feature-icon4.svg'
import Feature5 from '../../../public/assets/img/mobile-application-development/feature-icon5.svg'
import Feature6 from '../../../public/assets/img/mobile-application-development/feature-icon6.svg'
const teams = team_data.filter(team => team.about_p);

const Features = () => {
  return (
    <section className='w-full relative'>
        <div className='w-full h-[300px] md:h-[500px] lg:h-[612px] feature-section-bg bg-cover flex items-center px-[20px] py-[50px]'>
            <div className='max-w-[1210px] w-full mx-auto'>
                <div className='max-w-[520px] w-full flex flex-col gap-[16px]'>
                    <h2 className='text-[46px] leading-[46px] md:text-[56px] md:leading-[56px] lg:text-[76px] lg:leading-[76px] xl:text-[96px] xl:leading-[96px] text-[#EEEEEE] font-bold custom-text-shadow m-0'>Features</h2>
                    <p className='text-[16px] leading-[22px] lg:text-[18px] lg:leading-[26px] text-[#FFFFFF] m-0'>Once your mobile app has been thoroughly tested, we'll deploy it and integrate it with your existing systems to ensure seamless operation.</p>
                </div>
            </div>
        </div>

        <div className='max-w-[1210px] w-full mx-auto mt-[-60px] md:mt-[-130px] px-[20px]'>
            <div className='flex flex-wrap mx-[-20px] xl:mx-[-40px]'>
                <div className='w-full sm:w-1/2 xl:w-1/3 p-[20px] xl:p-[40px]'>
                    <div className='w-full h-full bg-[#F9F9F9] rounded-[30px] shadow px-[24px] pt-[50px] pb-[20px] flex flex-col gap-[20px] items-center'>
                        <Image height="200" src={Feature1} alt="" />
                        <h4 className='w-full text-[20px] leading-[24px] lg:text-[24px] lg:leading-[30px] text-[#00ADB5] m-0 font-bold'>Native Mobile App Development</h4>
                        <p className='text-[12px] leading-[20px] text-[#222831] m-0'>AI and ML are being used in custom software development to create intelligent applications that can learn from user behavior and data to automate tasks, personalize experiences, and make predictions.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 xl:w-1/3 p-[20px] xl:p-[40px]'>
                    <div className='w-full h-full bg-[#F9F9F9] rounded-[30px] shadow px-[24px] pt-[50px] pb-[20px] flex flex-col gap-[20px] items-center'>
                        <Image height="200" src={Feature2} alt="" />
                        <h4 className='w-full text-[20px] leading-[24px] lg:text-[24px] lg:leading-[30px] text-[#00ADB5] m-0 font-bold'>Cross-Platform Mobile App Development</h4>
                        <p className='text-[12px] leading-[20px] text-[#222831] m-0'>Our cross-platform mobile app development services allow you to reach a broader audience by creating mobile apps that work on multiple devices and platforms.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 xl:w-1/3 p-[20px] xl:p-[40px]'>
                    <div className='w-full h-full bg-[#F9F9F9] rounded-[30px] shadow px-[24px] pt-[50px] pb-[20px] flex flex-col gap-[20px] items-center'>
                        <Image height="200" src={Feature3} alt="" />
                        <h4 className='w-full text-[20px] leading-[24px] lg:text-[24px] lg:leading-[30px] text-[#00ADB5] m-0 font-bold'>UI/UX Design</h4>
                        <p className='text-[12px] leading-[20px] text-[#222831] m-0'>Our talented designers create stunning mobile app interfaces that are intuitive, user-friendly, and visually appealing.</p>
                    </div>
                </div>

                <div className='w-full sm:w-1/2 xl:w-1/3 p-[20px] xl:p-[40px]'>
                    <div className='w-full h-full bg-[#F9F9F9] rounded-[30px] shadow px-[24px] pt-[50px] pb-[20px] flex flex-col gap-[20px] items-center'>
                        <Image height="200" src={Feature4} alt="" />
                        <h4 className='w-full text-[20px] leading-[24px] lg:text-[24px] lg:leading-[30px] text-[#00ADB5] m-0 font-bold'>Integration with Existing Systems</h4>
                        <p className='text-[12px] leading-[20px] text-[#222831] m-0'>We can seamlessly integrate your mobile app with your existing systems, ensuring smooth operation and minimal disruption to your business.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 xl:w-1/3 p-[20px] xl:p-[40px]'>
                    <div className='w-full h-full bg-[#F9F9F9] rounded-[30px] shadow px-[24px] pt-[50px] pb-[20px] flex flex-col gap-[20px] items-center'>
                        <Image height="200" src={Feature5} alt="" />
                        <h4 className='w-full text-[20px] leading-[24px] lg:text-[24px] lg:leading-[30px] text-[#00ADB5] m-0 font-bold'>Security and Compliance</h4>
                        <p className='text-[12px] leading-[20px] text-[#222831] m-0'>We prioritize security and compliance in all our mobile app development projects, ensuring that your app meets all relevant regulatory standards.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 xl:w-1/3 p-[20px] xl:p-[40px]'>
                    <div className='w-full h-full bg-[#F9F9F9] rounded-[30px] shadow px-[24px] pt-[50px] pb-[20px] flex flex-col gap-[20px] items-center'>
                        <Image height="200" src={Feature6} alt="" />
                        <h4 className='w-full text-[20px] leading-[24px] lg:text-[24px] lg:leading-[30px] text-[#00ADB5] m-0 font-bold'>Maintenance and Support</h4>
                        <p className='text-[12px] leading-[20px] text-[#222831] m-0'>We offer ongoing maintenance and support services to ensure your app continues to meet your business needs and stays up-to-date with the latest technologies.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Features;