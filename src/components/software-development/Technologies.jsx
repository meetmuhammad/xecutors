import React from "react";
import Image from "next/image";
import { team_data } from "../../data";
import Techno1 from "../../../public/assets/img/software-development/technology-icon1.svg";
import Techno2 from "../../../public/assets/img/software-development/technology-icon2.svg";
import Techno3 from "../../../public/assets/img/software-development/technology-icon3.svg";
import Techno4 from "../../../public/assets/img/software-development/technology-icon4.svg";
import Techno5 from "../../../public/assets/img/software-development/technology-icon5.svg";
import Techno6 from "../../../public/assets/img/software-development/technology-icon6.svg";
const teams = team_data.filter((team) => team.about_p);

const Technologies = () => {
  return (
    <section
      className="max-w-[1257px] mx-auto w-full relative px-[20px] pt-[0] pb-[50px] sm:py-[50px] md:py-[100px]"
      id="#technologies"
    >
      <div className="max-w-[900px] w-full mx-auto relative z-2">
        <div className="w-full flex text-center flex-col gap-[24px]">
          <h2 className="text-[#00ADB5] text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] leading-[38px] sm:leading-[50px] md:leading-[60px] xl:leading-[77px] m-0">
            Technologies that we are using
          </h2>
          <p className="text-[18px] text-[#222831] leading-[26px]">
            Our custom software development services are designed to be
            scalable, flexible, and adaptable, helping your business stay ahead
            of the competition and navigate changes in the market.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mx-[-20px] xl:mx-[-40px] mt-[40px]">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-[20px] xl:p-[40px]">
          <div className="w-full h-full flex flex-col gap-[15px] text-center bg-[#F9F9F9] rounded-[30px] py-[30px] px-[20px]">
            <div>
              <Image src={Techno1} alt="" />
            </div>
            <h4 className="m-0 text-[20px] lg:text-[24px] leading-[22px] lg:leading-[30px] text-[#00ADB5] font-semibold">
              Artificial Intelligence (AI) and Machine Learning (ML)
            </h4>
            <p className="text-[12px] leading-[18px] text-[#222831] m-0">
              AI and ML are being used in custom software development to create
              intelligent applications that can learn from user behavior and
              data to automate tasks, personalize experiences, and make
              predictions.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-[20px] xl:p-[40px]">
          <div className="w-full h-full flex flex-col gap-[15px] text-center bg-[#F9F9F9] rounded-[30px] py-[30px] px-[20px]">
            <div>
              <Image src={Techno2} alt="" />
            </div>
            <h4 className="m-0 text-[20px] lg:text-[24px] leading-[22px] lg:leading-[30px] text-[#00ADB5] font-semibold">
              Internet of Things (IoT)
            </h4>
            <p className="text-[12px] leading-[18px] text-[#222831] m-0">
              IoT involves connecting devices and sensors to the internet to
              collect data and enable automation. It's used in custom software
              development to create smart homes, smart cities, and industrial
              automation applications.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-[20px] xl:p-[40px]">
          <div className="w-full h-full flex flex-col gap-[15px] text-center bg-[#F9F9F9] rounded-[30px] py-[30px] px-[20px]">
            <div>
              <Image src={Techno3} alt="" />
            </div>
            <h4 className="m-0 text-[20px] lg:text-[24px] leading-[22px] lg:leading-[30px] text-[#00ADB5] font-semibold">
              Blockchain
            </h4>
            <p className="text-[12px] leading-[18px] text-[#222831] m-0">
              Blockchain is a decentralized ledger technology that provides a
              secure and tamper-proof way to store and share data. It's used in
              custom software development to create secure, transparent, and
              decentralized applications such as cryptocurrency wallets, supply
              chain management, and voting systems.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-[20px] xl:p-[40px]">
          <div className="w-full h-full flex flex-col gap-[15px] text-center bg-[#F9F9F9] rounded-[30px] py-[30px] px-[20px]">
            <div>
              <Image src={Techno4} alt="" />
            </div>
            <h4 className="m-0 text-[20px] lg:text-[24px] leading-[22px] lg:leading-[30px] text-[#00ADB5] font-semibold">
              Cloud Computing
            </h4>
            <p className="text-[12px] leading-[18px] text-[#222831] m-0">
              Cloud computing involves delivering computing services over the
              internet. It's being used in custom software development to create
              scalable, flexible, and cost-effective applications that can be
              accessed from anywhere.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-[20px] xl:p-[40px]">
          <div className="w-full h-full flex flex-col gap-[15px] text-center bg-[#F9F9F9] rounded-[30px] py-[30px] px-[20px]">
            <div>
              <Image src={Techno5} alt="" />
            </div>
            <h4 className="m-0 text-[20px] lg:text-[24px] leading-[22px] lg:leading-[30px] text-[#00ADB5] font-semibold">
              Low-Code Development Platforms
            </h4>
            <p className="text-[12px] leading-[18px] text-[#222831] m-0">
              Low-code development platforms allow developers to create custom
              software solutions with minimal coding. They're being used in
              custom software development to accelerate development times and
              reduce costs.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-[20px] xl:p-[40px]">
          <div className="w-full h-full flex flex-col gap-[15px] text-center bg-[#F9F9F9] rounded-[30px] py-[30px] px-[20px]">
            <div>
              <Image src={Techno6} alt="" />
            </div>
            <h4 className="m-0 text-[20px] lg:text-[24px] leading-[22px] lg:leading-[30px] text-[#00ADB5] font-semibold">
              Microservices Architecture
            </h4>
            <p className="text-[12px] leading-[18px] text-[#222831] m-0">
              Microservices architecture involves breaking down applications
              into small, independent services that can be developed and
              deployed separately. It's used in custom software development to
              create scalable, flexible, and agile applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
