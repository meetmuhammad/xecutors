import React from 'react';
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blogimg from "../../../public/assets/img/case/CaseStudy2.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const RelatedSlider = ({ item }) => {
  return (
    <Slider {...settings}>
      <div className='p-[10px]'>
      <div className="w-full bg-white border border-[#e3e3e3] rounded-[6px] overflow-hidden">
            <div className="w-full relative">
              <Image
                className="object-cover"
                width={700}
                height={450}
                src={blogimg}
                alt=""
              />
              
            </div>

            <div className="w-full p-[15px_15px_15px_15px] md:p-[15px]">
            <ul className="flex justify-start gap-[16px] items-center mb-[16px]">
                <li className="bg-[#111111] px-[10px] py-[3px] rounded-[2px] text-white text-[14px] leading-[21px]">JavaScript</li>
                <li className="text-[#111111]  text-[14px] leading-[21px]">5 min read</li>
              </ul>
              <h3 className="text-[#000] text-[20px] md:text-[24px] mb-[10px] font-bold">
                {" "}
                <a href="#">
                A beginner’s guide to blackchain for engineers
                </a>{" "}
              </h3>
              <p className="text-[14px] leading-normal">
                Xecutors recently completed a ground-breaking project with
                eTravelo, an online airline ticket and hotel booking platform.
                The project, aptly named eTravelo.
              </p>
              <div className="w-full mb-[15px] mt-[30px]">
              <a className="custom-read-btn text-[16px] text-[#111111] border border-[#111111] rounded-[4px]" href="#">
                  Read More
                </a>
              </div>
              
            </div>
          </div>
       
      </div>
      <div className='p-[10px]'>
      <div className="w-full bg-white border border-[#e3e3e3] rounded-[6px] overflow-hidden">
            <div className="w-full relative">
              <Image
                className="object-cover"
                width={700}
                height={450}
                src={blogimg}
                alt=""
              />
              
            </div>

            <div className="w-full p-[15px_15px_15px_15px] md:p-[15px]">
            <ul className="flex justify-start gap-[16px] items-center mb-[16px]">
                <li className="bg-[#111111] px-[10px] py-[3px] rounded-[2px] text-white text-[14px] leading-[21px]">JavaScript</li>
                <li className="text-[#111111]  text-[14px] leading-[21px]">5 min read</li>
              </ul>
              <h3 className="text-[#000] text-[20px] md:text-[24px] mb-[10px] font-bold">
                {" "}
                <a href="#">
                A beginner’s guide to blackchain for engineers
                </a>{" "}
              </h3>
              <p className="text-[14px] leading-normal">
                Xecutors recently completed a ground-breaking project with
                eTravelo, an online airline ticket and hotel booking platform.
                The project, aptly named eTravelo.
              </p>
              <div className="w-full mb-[15px] mt-[30px]">
              <a className="custom-read-btn text-[16px] text-[#111111] border border-[#111111] rounded-[4px]" href="#">
                  Read More
                </a>
              </div>
              
            </div>
          </div>
      </div>
      <div className='p-[10px]'>
      <div className="w-full bg-white border border-[#e3e3e3] rounded-[6px] overflow-hidden">
            <div className="w-full relative">
              <Image
                className="object-cover"
                width={700}
                height={450}
                src={blogimg}
                alt=""
              />
              
            </div>

            <div className="w-full p-[15px_15px_15px_15px] md:p-[15px]">
            <ul className="flex justify-start gap-[16px] items-center mb-[16px]">
                <li className="bg-[#111111] px-[10px] py-[3px] rounded-[2px] text-white text-[14px] leading-[21px]">JavaScript</li>
                <li className="text-[#111111]  text-[14px] leading-[21px]">5 min read</li>
              </ul>
              <h3 className="text-[#000] text-[20px] md:text-[24px] mb-[10px] font-bold">
                {" "}
                <a href="#">
                A beginner’s guide to blackchain for engineers
                </a>{" "}
              </h3>
              <p className="text-[14px] leading-normal">
                Xecutors recently completed a ground-breaking project with
                eTravelo, an online airline ticket and hotel booking platform.
                The project, aptly named eTravelo.
              </p>
              <div className="w-full mb-[15px] mt-[30px]">
              <a className="custom-read-btn text-[16px] text-[#111111] border border-[#111111] rounded-[4px]" href="#">
                  Read More
                </a>
              </div>
              
            </div>
          </div>
      </div>
      <div className='p-[10px]'>
      <div className="w-full bg-white border border-[#e3e3e3] rounded-[6px] overflow-hidden">
            <div className="w-full relative">
              <Image
                className="object-cover"
                width={700}
                height={450}
                src={blogimg}
                alt=""
              />
              
            </div>

            <div className="w-full p-[15px_15px_15px_15px] md:p-[15px]">
            <ul className="flex justify-start gap-[16px] items-center mb-[16px]">
                <li className="bg-[#111111] px-[10px] py-[3px] rounded-[2px] text-white text-[14px] leading-[21px]">JavaScript</li>
                <li className="text-[#111111]  text-[14px] leading-[21px]">5 min read</li>
              </ul>
              <h3 className="text-[#000] text-[20px] md:text-[24px] mb-[10px] font-bold">
                {" "}
                <a href="#">
                A beginner’s guide to blackchain for engineers
                </a>{" "}
              </h3>
              <p className="text-[14px] leading-normal">
                Xecutors recently completed a ground-breaking project with
                eTravelo, an online airline ticket and hotel booking platform.
                The project, aptly named eTravelo.
              </p>
              <div className="w-full mb-[15px] mt-[30px]">
              <a className="custom-read-btn text-[16px] text-[#111111] border border-[#111111] rounded-[4px]" href="#">
                  Read More
                </a>
              </div>
              
            </div>
          </div>
      </div>
    </Slider>
  );
};

export default RelatedSlider;
