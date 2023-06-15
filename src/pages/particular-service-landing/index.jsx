import React from "react";
import { FooterThree, Wrapper } from "../../layout";
import HeroSection from "../../components/particular-service/HeroSection";
import OurBranding from "../../components/particular-service/OurBrandingDesign";
import StartGetting from "../../components/particular-service/StartGetting";
import PricingPlain from "../../components/particular-service/PricingPlan";
import RecentWork from "../../components/particular-service/RecentWork";
import CommonQuestions from "../../components/particular-service/CommonQuestions";

const index = () => {
  return (
    <Wrapper>
      {/* <HeaderFour /> */}
      <HeroSection />
      <OurBranding />
      <StartGetting />
      <PricingPlain />
      <RecentWork />
      <CommonQuestions />
      <FooterThree />
    </Wrapper>
  );
};

export default index;
