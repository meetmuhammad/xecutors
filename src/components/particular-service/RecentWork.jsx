import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import Work1 from '../../../public/assets/img/particular-service-landing/work1.png'
import Work2 from '../../../public/assets/img/particular-service-landing/work2.png'
import Work3 from '../../../public/assets/img/particular-service-landing/work3.png'
import Work4 from '../../../public/assets/img/particular-service-landing/work4.png'
import Work5 from '../../../public/assets/img/particular-service-landing/work5.png'
import Work6 from '../../../public/assets/img/particular-service-landing/work6.png'
import Work7 from '../../../public/assets/img/particular-service-landing/work7.png'
import Work8 from '../../../public/assets/img/particular-service-landing/work8.png'

const teams = team_data.filter(team => team.about_p);

const RecentWork = () => {
  return (
    <div className='w-full px-[20px] py-[50px] md:py-[100px]'>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-[20px] md:gap-[60px]'>
            <h2 className='text-center text-[40px] md:text-[50px] lg:text-[60px] leading-[40px] md:leading-[50px] lg:leading-[60px] tracking-[-3px] text-[#222831]'>Our recent Work</h2>
            <div className='w-full flex flex-col gap-[5px] md:gap-[15px]'>
            <div className='w-full flex gap-[10px] md:gap-[20px]'>
                <div className='w-1/2'>
                    <div className='recent-work relative'>
                    <Image src={Work1} alt="" />
                    </div>
                    
                </div>
                <div className='w-1/2 flax flex-col '>
                    <div className='w-full flex gap-[10px] md:gap-[20px] mb-[10px] md:mb-[20px]'>
                    <div className='recent-work relative'>
                    <Image src={Work2} alt="" />
                    </div>
                    <div className='recent-work relative'>
                    <Image src={Work3} alt="" />
                    </div>
                    </div>
                    <div className='w-full flex gap-[20px]'>
                    <div className='recent-work relative'>
                    <Image src={Work4} alt="" />
                    </div>
                    <div className='recent-work relative'>
                    <Image src={Work5} alt="" />
                    </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex gap-[10px] md:gap-[20px]'>
                <div className='w-1/2 flax flex-col'>
                    <div className='w-full flex gap-[10px] md:gap-[20px] mb-[20px]'>
                        <div className='recent-work relative'>
                            <Image src={Work6} alt="" />
                        </div>
                        <div className='recent-work relative'>
                            <Image src={Work7} alt="" />
                        </div>
                    </div>
                  
                </div>
                <div className='w-1/2 flax flex-col'>
                <div className='recent-work relative'>
                            <Image src={Work8} alt="" />
                        </div>
                </div>
            </div>
            </div>
            

            <div className="flex gap-[26px] md:mt-[20px] justify-center">
                <a className="sm:min-w-[176px] h-[43px] px-[20px] bg-[#353433] text-[20px] leading-[25px] text-center text-white leading-[43px]" href="#">See More</a>
                <a className="sm:min-w-[176px] h-[43px] px-[20px] text-[20px] leading-[25px] border border-black text-center text-[#353433] leading-[43px]" href="#">Subscribe</a>
            </div>
        </div>
    </div>
  );
};

export default RecentWork;