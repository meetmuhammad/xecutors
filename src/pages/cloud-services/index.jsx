import React from "react";
import { FooterThree, Wrapper, HeaderFour } from "../../layout";
import CommonQuestions from "../../components/particular-service/CommonQuestions";
import PriceArea from "../../components/price/price-area";
import HeroSection from "../../components/cloud-services/HeroSection";
import CloudComputer from "../../components/cloud-services/CloudComputing";
import OurWorkCycle from "../../components/cloud-services/OurWorkCycle";
import Feature from "../../components/cloud-services/Feature";
import Technologies from "../../components/cloud-services/Technologies";

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <HeroSection />
      <CloudComputer />
      <OurWorkCycle />
      <Feature />
      <Technologies />
      <div className="pb-[50px]"><PriceArea /></div>
      <CommonQuestions />
      <FooterThree />
      
    </Wrapper>
  );
};

export default index;
