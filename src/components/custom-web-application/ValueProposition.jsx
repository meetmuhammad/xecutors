import React from 'react';
import Image from "next/image";
import quote from '../../../public/assets/img/custom-web-application/quote.svg'

const ValueProposition = () => {
  return (
    <section className='w-full relative flex items-center justify-center overflow-hidden px-[20px] pt-[100px] pb-[180px] bg-white'>
        <div className='max-w-[1042px] w-full mx-auto relative z-2'>
            <div className='w-full flex flex-col'>
                <h1 className='mb-[30px] text-[#00ADB5] text-[60px] text-center'>Value Proposition</h1>
                <p className='mb-[10px] text-[24px] leading-[30px] text-[#222831] text-center'>At <b className='text-[#00ADB5]'>Xecutors,</b></p>
                <p className='relative text-[24px] leading-[30px] text-[#222831] text-center'>
                    <div className='absolute left-0 top-[-130px]'> <Image src={quote} alt="" /> </div>
                    <div className='absolute right-0 bottom-[-100px] rotate-[180deg]'> <Image src={quote} alt="" /> </div>
                    <em>we're committed to delivering high-quality, custom web applications that help businesses of all sizes achieve their goals. With years of experience in web application development, our expert team has the skills and knowledge to create a web application that is tailored to your specific needs. Whether you're looking to automate tasks, enhance your customer experience, or improve efficiency, our web application development services can help you achieve your business objectives</em> </p>

            </div>
        </div>
    </section>
  );
};

export default ValueProposition;