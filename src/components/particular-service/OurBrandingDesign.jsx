import React from 'react';
import Image from "next/image";
import { team_data } from '../../data';
import branding1 from '../../../public/assets/img/particular-service-landing/branding1.svg'

const teams = team_data.filter(team => team.about_p);

const OurBranding = () => {
  return (
    <div className='w-full bg-[#EEEEEE] py-[50px] md:py-[113px] px-[15px]'>
	<div className='max-w-[1280px] w-full mx-auto flex flex-col-reverse lg:flex-row gap-[60px] justify-between items-center'>
		<div className='max-w-[580px] w-full'>
			<h2 className='text-[40px] md:text-[50px] lg:text-[60px] leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#222831] font-bold mb-[24px]'>Our branding design process</h2>
			<p className='text-[#222831] text-[18px] leading-[26px]'>is designed to help you create a unique and memorable brand identity that accurately represents your business</p>
			<div className='flex gap-[26px] mt-[30px]'>
				<a className='md:min-w-[176px] h-[43px] px-[25px] bg-[#353433] text-[20px] leading-[25px] text-center text-white leading-[43px]' href="#">Sign Up</a>
				<a className='md:min-w-[176px] h-[43px] px-[25px] text-[20px] leading-[25px] border border-black text-center text-[#353433] leading-[43px]' href="#">Login</a>
			</div>
		</div>
		<div className='w-full flex justify-center items-center'>
			<Image src={branding1} alt="" />
		</div>
	</div>
</div>
  );
};

export default OurBranding;