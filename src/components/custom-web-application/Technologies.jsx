import React from 'react';
import Image from "next/image";
import Technologiesshape from '../../../public/assets/img/custom-web-application/Technologies-shape.svg'
import webapp from '../../../public/assets/img/custom-web-application/webapp.png'

const Technoligies = () => {
  return (
    <section className='w-full relative flex items-center justify-center overflow-hidden px-[20px] pt-[100px] bg-gradient-to-b from-[#EEEEEE] to-[#F9F9F900]'>
        <div className='absolute left-0 right-0 top-[40px]'>
            <Image src={Technologiesshape} alt="" />
        </div>
        <div className='max-w-[1042px] w-full mx-auto relative z-2'>
            <div className='w-full flex flex-col'>
                <h1 className='mb-[30px] text-[#00ADB5] text-[60px] text-center'>Tools and Technologies</h1>
            </div>

            <div className='w-full flex items-center'>
                <div className='max-w-[667px] w-full flex flex-col gap-[20px] mt-[100px]'>
                    <h4 className='text-[40px] leading-[40px] text-[#00ADB5] m-0'>Programming languages</h4>
                    <p className='text-[24px] leading-[30px] text-[#222831] m-0'>JavaScript, HTML, CSS, PHP, Python, Ruby, Java, C#, and more.</p>

                    <h4 className='text-[40px] leading-[40px] text-[#00ADB5] m-0'>Frameworks</h4>
                    <p className='text-[24px] leading-[30px] text-[#222831] m-0'>React, Angular, Vue.js, Laravel, Django, Ruby on Rails, Spring, .NET, and more.</p>

                    <h4 className='text-[40px] leading-[40px] text-[#00ADB5] m-0'>Databases</h4>
                    <p className='text-[24px] leading-[30px] text-[#222831] m-0'>MySQL, PostgreSQL, MongoDB, SQLite, Oracle, and more.</p>
                    <h4 className='text-[40px] leading-[40px] text-[#00ADB5] m-0'>Content Management Systems</h4>
                    <p className='text-[24px] leading-[30px] text-[#222831] m-0'>WordPress, Drupal, Joomla, Magento, and more.</p>
                    <h4 className='text-[40px] leading-[40px] text-[#00ADB5] m-0'>Cloud Platforms</h4>
                    <p className='text-[24px] leading-[30px] text-[#222831] m-0'>Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform, and more.</p>
                    <h4 className='text-[40px] leading-[40px] text-[#00ADB5] m-0'>Development tools</h4>
                    <p className='text-[24px] leading-[30px] text-[#222831] m-0'>Git, Docker, Visual Studio Code, Eclipse, NetBeans, and more</p>
                </div>
                <div className='w-auto'>
                    <Image src={webapp} alt="" />
                </div>
            </div>
            
        </div>
    </section>
  );
};

export default Technoligies;