import React from "react";
import { team_data } from "../../data";

const teams = team_data.filter((team) => team.about_p);

const PricingPlain = () => {
  return (
    <div className="w-full bg-[#F0F0F0] px-[15px] py-[50px] md:py-[100px] lg:py-[120px]">
      <div className="max-w-[1280px] w-full mx-auto">
        <h2 className="max-w-[917px] w-full mx-auto text-center text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[32px] sm:leading-[40px] md:leading-[67px] lg:leading-[77px] text-[#222831] mb-[15px] md:mb-[38px]">
          Select a membership level the right price for you.
        </h2>
        <p className="max-w-[967px] w-full mx-auto text-[#222831] text-center">
          Throughout the branding design process, you'll have access to our team
          of designers who will work with you to refine the design until it's
          perfect. We pride ourselves on delivering high-quality design work
          that accurately reflects your brand identity and meets your branding
          objectives.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-[16px] mt-[80px]">
          <div className="w-full md:w-1/3 border bg-[#fff] hover:bg-[#00ADB5] rounded-[10px] p-[30px] lg:p-[40px] text-[#222831] hover:text-[#fff] relative price-table">
            <h3 className="gap-[10px] text-[68px] leading-[60px] flex mb-0 mt-[20px]">
              {" "}
              <small className="text-[18px] font-bold leading-[22px]">
                $
              </small>{" "}
              249{" "}
              <small className="absolute right-[25px] top-[20px] text-[14px] uppercase leading-[22px]">
                per month
              </small>{" "}
            </h3>
            <span className="text-[14px] uppercase font-bold pl-[10px]">
              2 Revisions
            </span>
            <ul className="flex flex-col gap-[16px] lg:gap-[26px] text-[18px] p-0 list-none mt-[68px] mb-[50px] md:min-h-[260px]">
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 logo Design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 Stationary Design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 Social Media Cover design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                Deliver in 3 days
              </li>
            </ul>

            <a
              className="w-full h-[52px] bg-[#00ADB5] flex items-center justify-center text-white text-[18px] font-bold rounded-[5px] join-btn"
              href="#"
            >
              Join
            </a>
          </div>
          <div className="w-full md:w-1/3 border bg-[#fff] hover:bg-[#00ADB5] rounded-[10px] p-[30px] lg:p-[40px] text-[#222831] hover:text-[#fff] relative price-table">
            <h3 className="gap-[10px] text-[68px] leading-[60px] flex mb-0 mt-[20px]">
              {" "}
              <small className="text-[18px] font-bold leading-[22px]">
                $
              </small>{" "}
              449{" "}
              <small className="absolute right-[25px] top-[20px] text-[14px] uppercase leading-[22px]">
                per month
              </small>{" "}
            </h3>
            <span className="text-[14px] uppercase font-bold pl-[10px]">
              3 Revisions
            </span>
            <ul className="flex flex-col gap-[16px] lg:gap-[26px] text-[18px] p-0 list-none mt-[68px] mb-[50px] md:min-h-[260px]">
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 logo Design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 Stationary Design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 Social Media Cover design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                Deliver in 3 days
              </li>
            </ul>

            <a
              className="w-full h-[52px] bg-[#00ADB5] flex items-center justify-center text-white text-[18px] font-bold rounded-[5px] join-btn"
              href="#"
            >
              Join
            </a>
          </div>
          <div className="w-full md:w-1/3 border bg-[#fff] hover:bg-[#00ADB5] rounded-[10px] p-[30px] lg:p-[40px] text-[#222831] hover:text-[#fff] relative price-table">
            <h3 className="text-[68px] leading-[60px] flex mb-0 mt-[20px] gap-[10px]">
              {" "}
              <small className="text-[18px] font-bold leading-[22px]">
                $
              </small>{" "}
              749{" "}
              <small className="absolute right-[25px] top-[20px] text-[14px] uppercase leading-[22px]">
                per month
              </small>{" "}
            </h3>
            <span className="text-[14px] uppercase font-bold pl-[10px]">
              Unlimited Revisions
            </span>
            <ul className="flex flex-col gap-[16px] lg:gap-[26px] text-[18px] p-0 list-none mt-[68px] mb-[50px] md:min-h-[260px]">
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 logo Design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 Stationary Design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                1 Social Media Cover design
              </li>
              <li className="flex gap-[30px] m-0">
                <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px] list-dot"></div>{" "}
                Deliver in 3 days
              </li>
            </ul>

            <a
              className="w-full h-[52px] bg-[#00ADB5] flex items-center justify-center text-white text-[18px] font-bold rounded-[5px] join-btn"
              href="#"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlain;
