import React from "react";
import Image from "next/image";
import { team_data } from "../../data";
import PricePlan from "../price/price-plan";
import PriceArea from "../price/price-area";
const teams = team_data.filter((team) => team.about_p);

const PricingPlan = () => {
  return (
    <section
      className="w-full section-gradient relative section-bottom-shape section-top-shape overflow-hidden md:px-[20px] pb-[130px]"
      id="#pricing"
    >
      <div className="max-w-[1344px] w-full mx-auto relative z-[99]">
        <div className="w-full flex flex-col gap-[55px]">
          <PriceArea />
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
