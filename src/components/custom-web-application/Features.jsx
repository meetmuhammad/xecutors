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
import featureshape from '../../../public/assets/img/custom-web-application/feature-shape.svg'
const Features = () => {
  return (
    <section className='w-full relative flex items-center justify-center overflow-hidden px-[20px] pb-[180px] bg-gradient-to-t from-[#EEEEEE] to-[#F9F9F900]'>
        <div className='absolute left-0 right-0 bottom-[30px]'> <Image src={featureshape} alt="" /> </div>
        <div className='max-w-[1288px] w-full mx-auto relative z-2'>
            <div className='w-full flex flex-col'>
                <h1 className='mb-[30px] text-[#00ADB5] text-[60px] text-center'>Features</h1>
            </div>

            <div className='w-full flex flex-wrap justify-center'>
                <div className='w-1/3 p-[40px] flex flex-col items-center gap-[20px] jusitfy-center'>
                    <div className='h-[130px]'> <Image src={customcoding} alt="" /> </div>
                    <h3 className='text-[28px] text-[#00ADB5] leading-[36px] text-center font-bold m-0'>Custom Coding</h3>
                    <p className='text-[18px] leading-[26px] text-[#222831] text-center m-0'>Highlight your ability to provide custom coding services that are tailored to the unique needs of each client's web application.</p>
                </div>
                <div className='w-1/3 p-[40px] flex flex-col items-center gap-[20px] jusitfy-center'>
                    <div className='h-[130px]'> <Image src={responsivedesign} alt="" /> </div>
                    <h3 className='text-[28px] text-[#00ADB5] leading-[36px] text-center font-bold m-0'>Responsive Design</h3>
                    <p className='text-[18px] leading-[26px] text-[#222831] text-center m-0'>Emphasize the importance of responsive design, which ensures that your web application looks and performs optimally on a wide range of devices, from desktops to smartphones.</p>
                </div>
                <div className='w-1/3 p-[40px] flex flex-col items-center gap-[20px] jusitfy-center'>
                    <div className='h-[130px]'> <Image src={userfriendlyinterface} alt="" /> </div>
                        <h3 className='text-[28px] text-[#00ADB5] leading-[36px] text-center font-bold m-0'>User-Friendly Interface</h3>
                        <p className='text-[18px] leading-[26px] text-[#222831] text-center m-0'>Mention your focus on creating user-friendly interfaces that are intuitive and easy to navigate, providing an optimal user experience for your clients' customers.</p>
                </div>

                <div className='w-1/3 p-[40px] flex flex-col items-center gap-[20px] jusitfy-center'>
                    <div className='h-[130px]'> <Image src={scalability} alt="" /> </div>
                    <h3 className='text-[28px] text-[#00ADB5] leading-[36px] text-center font-bold m-0'>Scalability</h3>
                    <p className='text-[18px] leading-[26px] text-[#222831] text-center m-0'>Highlight your ability to create web applications that can scale as your client's business grows, ensuring that the application remains functional and efficient even as user and data volumes increase.</p>
                </div>
                <div className='w-1/3 p-[40px] flex flex-col items-center gap-[20px] jusitfy-center'>
                    <div className='h-[130px]'> <Image src={security} alt="" /> </div>
                    <h3 className='text-[28px] text-[#00ADB5] leading-[36px] text-center font-bold m-0'>Security</h3>
                    <p className='text-[18px] leading-[26px] text-[#222831] text-center m-0'>Emphasize your focus on security, including measures such as encryption and authentication, to ensure that your clients' web applications are secure and protect their sensitive data.</p>
                </div>
                <div className='w-1/3 p-[40px] flex flex-col items-center gap-[20px] jusitfy-center'>
                    <div className='h-[130px]'> <Image src={supportmaintenance} alt="" /> </div>
                        <h3 className='text-[28px] text-[#00ADB5] leading-[36px] text-center font-bold m-0'>Support and Maintenance</h3>
                        <p className='text-[18px] leading-[26px] text-[#222831] text-center m-0'>Mention your ongoing support and maintenance services to ensure that your clients' web applications continue to meet their changing business needs and remain up-to-date with the latest technologies.</p>
                </div>

                <div className='w-1/3 p-[40px] flex flex-col items-center gap-[20px] jusitfy-center'>
                    <div className='h-[130px]'> <Image src={Qualityassurance} alt="" /> </div>
                        <h3 className='text-[28px] text-[#00ADB5] leading-[36px] text-center font-bold m-0'>Testing and Quality Assurance</h3>
                        <p className='text-[18px] leading-[26px] text-[#222831] text-center m-0'>Mention your rigorous testing and quality assurance processes to ensure that your clients' web applications are error-free, perform optimally, and meet their specific requirements.</p>
                </div>
                <div className='w-1/3 p-[40px] flex flex-col items-center gap-[20px] jusitfy-center'>
                    <div className='h-[130px]'> <Image src={Integration} alt="" /> </div>
                        <h3 className='text-[28px] text-[#00ADB5] leading-[36px] text-center font-bold m-0'>Integration with Existing Systems</h3>
                        <p className='text-[18px] leading-[26px] text-[#222831] text-center m-0'>Highlight your ability to integrate web applications with your clients' existing systems, ensuring seamless operation and improved efficiency.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Features;