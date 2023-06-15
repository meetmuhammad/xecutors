import React from "react";
import { FooterThree, Wrapper } from "../../layout";
import HeroSection from "../../components/software-development/HeroSection";
import FeatureSection from "../../components/software-development/Feature";
import FeatureItems from "../../components/software-development/Feature-items";
import OurWorkCycle from "../../components/software-development/Our-Work-Cycle";
import PricingPlan from "../../components/software-development/Pricing-plan";
import Technologies from "../../components/software-development/Technologies";
import CommonQuestions from "../../components/particular-service/CommonQuestions";
import { HeaderFour } from "../../layout";
import menu_data_sd from "../../layout/headers/menu-data-sd";

const index = () => {
  return (
    <Wrapper>
      <HeaderFour menu={menu_data_sd} />
      <HeroSection />
      <FeatureSection />
      <FeatureItems />
      <OurWorkCycle />
      <PricingPlan />
      <Technologies />
      <CommonQuestions />
      <FooterThree />
    </Wrapper>
  );
};

export default index;
