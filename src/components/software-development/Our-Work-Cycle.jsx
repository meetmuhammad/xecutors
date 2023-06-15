import React from "react";
import Image from "next/image";
import { team_data } from "../../data";
const teams = team_data.filter((team) => team.about_p);

const OurWorkCycle = () => {
  return (
    <section
      className="w-full relative px-[20px] py-[50px] md:py-[100px] xl:py-[150px]"
      id="#process"
    >
      <div className="max-w-[1133px] w-full mx-auto relative z-2">
        <div className="w-full flex text-center flex-col gap-[24px]">
          <h2 className="text-[#00ADB5] text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] leading-[38px] sm:leading-[50px] md:leading-[60px] xl:leading-[77px] m-0">
            Our Work Cycle
          </h2>
        </div>

        <div className="w-full md:w-[624px] mt-[50px] md:mt-[50px] lg:mt-[150px] xl:mt-[215px] mx-auto relative scale-[1] md:scale-[0.6] lg:scale-[0.8] xl:scale-[1]">
          <ul className="pb-[20px] md:p-0 mb-[50px] md:m-0 flex whitespace-nowrap md:whitespace-normal overflow-auto gap-[15px]">
            <li className="w-[inherit] md:w-[255px] h-[inherit] md:h-[120px] rounded-[63px] py-[10px] px-[20px] cycle-btn text-[#00ADB5] font-bold text-[16px] sm:text-[18px] md:text-[22px] flex items-center justify-center bg-white text-center static md:absolute top-[-160px] left-0 right-0 mx-auto cursor-pointer cycle-active">
              Discovery and Planning
            </li>
            <li className="w-[inherit] md:w-[255px] h-[inherit] md:h-[120px] rounded-[63px] px-[20px] cycle-btn text-[#00ADB5] font-bold text-[16px] sm:text-[18px] md:text-[22px] flex items-center justify-center bg-white text-center static md:absolute top-[140px] left-[-275px] cursor-pointer">
              Testing and Quality Assurance
            </li>
            <li className="w-[inherit] md:w-[255px] h-[inherit] md:h-[120px] rounded-[63px] px-[20px] cycle-btn text-[#00ADB5] font-bold text-[16px] sm:text-[18px] md:text-[22px] flex items-center justify-center bg-white text-center static md:absolute top-[140px] right-[-275px] cursor-pointer">
              Design and Development
            </li>
            <li className="w-[inherit] md:w-[255px] h-[inherit] md:h-[120px] rounded-[63px] px-[20px] cycle-btn text-[#00ADB5] font-bold text-[16px] sm:text-[18px] md:text-[22px] flex items-center justify-center bg-white text-center static md:absolute bottom-[-100px] left-[-100px] cursor-pointer">
              Training and Support
            </li>
            <li className="w-[inherit] md:w-[255px] h-[inherit] md:h-[120px] rounded-[63px] px-[20px] cycle-btn text-[#00ADB5] font-bold text-[16px] sm:text-[18px] md:text-[22px] flex items-center justify-center bg-white text-center static md:absolute bottom-[-100px] right-[-100px] cursor-pointer">
              Deployment and Integration
            </li>
          </ul>
          <div className="w-[100%] h-[auto] mx-auto md:w-[624px] cycle-box md:h-[624px] rounded-[20px] md:rounded-full p-[22px] bg-white">
            {/* Dits Group */}
            <div className="hidden md:block">
              <div className="w-[26px] h-[26px] rounded-full bg-[#00ADB5] absolute top-[-13px] left-0 right-0 mx-auto pointer-events-none"></div>
              <div className="w-[26px] h-[26px] rounded-full bg-[#00ADB5] absolute top-[200px] left-0 mx-auto pointer-events-none"></div>
              <div className="w-[26px] h-[26px] rounded-full bg-[#00ADB5] absolute top-[200px] right-0 mx-auto pointer-events-none"></div>
              <div className="w-[26px] h-[26px] rounded-full bg-[#00ADB5] absolute bottom-[30px] left-[134px] mx-auto pointer-events-none"></div>
              <div className="w-[26px] h-[26px] rounded-full bg-[#00ADB5] absolute bottom-[30px] right-[134px] mx-auto pointer-events-none"></div>
            </div>

            <div className="inner-cycle w-full h-full px-[30px] md:px-[70px] py-[20px] rounded-[20px] md:rounded-full bg-[#F9F9F9] flex items-center justify-center">
              <p className="text-[18px] md:text-[32px] leading-[35px] text-[#222831] text-center m-0">
                We start by getting to know your business and your specific
                needs. We'll work closely with you to identify your
                requirements, determine your budget and timeline, and create a
                project plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkCycle;
