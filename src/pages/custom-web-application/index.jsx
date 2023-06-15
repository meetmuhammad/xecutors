import React from "react";
import { FooterThree, Wrapper, HeaderFour } from "../../layout";
import HeroSection from "../../components/custom-web-application/HeroSection";
import ValueProposition from "../../components/custom-web-application/ValueProposition";
import Features from "../../components/custom-web-application/Features";
import OurWorkCycle from "../../components/custom-web-application/Our-work-cycle";
import Technoligies from "../../components/custom-web-application/Technologies";
import CommonQuestions from "../../components/particular-service/CommonQuestions";
import PriceArea from "../../components/price/price-area";
import Testimonial from "../../components/homes/home/testimonial";

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <HeroSection />
      <ValueProposition />
      <Features />
      <OurWorkCycle />
      <Technoligies />
      <div className="pb-[100px]"><PriceArea /></div>
      <Testimonial />
      <div className="bg-white custom-testimonial">
      <CommonQuestions />
      </div>
      <FooterThree />
      
    </Wrapper>
  );
};

export default index;
