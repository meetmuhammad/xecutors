import React from "react";
import Image from "next/image";
import faqBanner from "../../../public/assets/img/particular-service-landing/faq-banner.png";
import FaqToggle from "./FaqToggle";

const CommonQuestions = () => {
  return (
    <div className="w-full bg-[#EEEEEE] py-[50px] md:py-[113px] px-[15px]">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="w-full flex flex-col-reverse md:flex-row md:gap-[60px] justify-between items-center">
          <div className="w-full">
            <h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#00ADB5] font-bold mb-[24px]">
              Common Questions.
            </h2>
            <p className="text-[#222831] text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] md:leading-[26px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English
            </p>
          </div>
          <div className="max-w-[432px] w-full">
            <Image src={faqBanner} alt="" />
          </div>
        </div>
        <div className="w-full mt-[30px] md:mt-0">
          <FaqToggle />
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
