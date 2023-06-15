import React from "react";
import { FooterThree, Wrapper, HeaderFour } from "../../layout";
import CommonQuestions from "../../components/particular-service/CommonQuestions";
import PriceArea from "../../components/price/price-area";
import HeroSection from "../../components/mobile-application-development/HeroSection";
import AccelerateBusiness from "../../components/mobile-application-development/AccelerateBusiness";
import WorkProcess from "../../components/mobile-application-development/WorkProcess";
import Features from "../../components/mobile-application-development/Features";
import FamousTechnologies from "../../components/mobile-application-development/FamousTechnologies";

const index = () => {
  return (
    <Wrapper>
      <div className="bg-opacity-[0.4] bg-[#fff] h-[110px]">
      <HeaderFour />
      </div>
      <HeroSection />
      <AccelerateBusiness />
      <WorkProcess />
      <Features />
      <FamousTechnologies />
      <div className="pb-[100px]"><PriceArea /></div>
      <CommonQuestions />
      <FooterThree />
    </Wrapper>
  );
};

export default index;
