import React from "react";
import Image from "next/image";
import { team_data } from "../../data";
import branding2 from "../../../public/assets/img/particular-service-landing/branding2.svg";
import branding3 from "../../../public/assets/img/particular-service-landing/branding3.svg";
import business1 from "../../../public/assets/img/particular-service-landing/business.svg";
import business2 from "../../../public/assets/img/particular-service-landing/business2.svg";
import business3 from "../../../public/assets/img/particular-service-landing/business3.svg";
import business4 from "../../../public/assets/img/particular-service-landing/business4.svg";
import business5 from "../../../public/assets/img/particular-service-landing/business5.svg";
import Services1 from "../../../public/assets/img/particular-service-landing/service1.svg";
import Services2 from "../../../public/assets/img/particular-service-landing/Service2.svg";
import Services3 from "../../../public/assets/img/particular-service-landing/Service3.svg";
import Services4 from "../../../public/assets/img/particular-service-landing/Service4.svg";
import stepborder from "../../../public/assets/img/particular-service-landing/step-1.svg";
import stepborder2 from "../../../public/assets/img/particular-service-landing/step-2.svg";

const teams = team_data.filter((team) => team.about_p);

const StartGetting = () => {
  return (
    <div className="w-full bg-white py-[50px] md:py-[113px] px-[15px]">
	<div className="max-w-[1200px] w-full mx-auto flex flex-col gap-[50px] md:gap-[100px] lg:gap-[200px]">
		<div className="w-full flex gap-[20px] flex-col lg:flex-row justify-between items-center lg:pl-[30px]">
			<div className="w-full">
				<h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#222831] font-semibold mb-[24px] flex gap-[15px] md:gap-[27px]">
					<b className="text-[#00ADB5] text-[30px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-bold">#1</b> We start by getting to know
				</h2>
				<div className="w-full flex flex-col sm:flex-row gap-[25px] xl:gap-[46px] mt-[50px]">
					<div className="w-full sm:w-1/2">
						<div className="w-full flex flex-col gap-[25px] xl:gap-[46px]">
							<div className="w-full border-4 h-[236px] border rounded-[31px] p-[25px] flex flex-col items-center justify-center gap-[10px]">
								<Image src={business1} alt="" />
								<p className="text-[20px] text-[#222831] text-center m-0">Your business</p>
							</div>
							<div className="w-full border-4 h-[236px] border rounded-[31px] p-[25px] flex flex-col items-center justify-center gap-[10px]">
								<Image src={business4} alt="" />
								<p className="text-[20px] text-[#222831] text-center m-0">understanding your vision</p>
							</div>
						</div>
					</div>
					<div className="w-full sm:w-1/2 sm:mt-[30px]">
						<div className="w-full flex flex-col gap-[25px] xl:gap-[46px]">
							<div className="w-full border-4 h-[236px] border rounded-[31px] p-[25px] flex flex-col items-center justify-center gap-[10px]">
								<Image src={business3} alt="" />
								<p className="text-[20px] text-[#222831] text-center m-0">your target audience</p>
							</div>
							<div className="w-full border-4 h-[236px] border rounded-[31px] p-[25px] flex flex-col items-center justify-center gap-[10px]">
								<Image src={business5} alt="" />
								<p className="text-[20px] text-[#222831] text-center m-0">your unique selling 
proposition</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-[420px] w-full">
				<Image src={branding2} alt="" />
			</div>
		</div>
		<div className="w-full flex flex-col-reverse lg:flex-row gap-[45px] justify-between items-center">
			<div className="lg:max-w-[400px] w-full">
				<Image src={business2} alt="" />
			</div>
			<div className="w-full relative">
				<div className="absolute top-[-450px] left-[-450px] hidden lg:block">
					<Image src={stepborder} alt="" />
				</div>
				<h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#222831] font-semibold mb-[24px] flex gap-[15px] md:gap-[27px]">
					<b className="text-[#00ADB5] text-[30px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-bold">#2</b>{" "} Understanding business and branding
				</h2>
				<div className="w-full flex flex-col gap-[25px] md:gap-[45px] mt-[45px]">
					<div className="w-full flex gap-[15px] md:gap-[30px]">
						<div className="max-w-[70px] md:max-w-[105px] w-full">
							<Image src={Services1} alt="" />
						</div>
						<div className="w-full flex flex-col gap-[10px]">
							<h4 className="text-[20px] md:text-[22px] lg:text-[28px] leading-[28px] md:leading-[30px] lg:leading-[36px] text-[#222831] m-0"> We will create unique logo </h4>
							<p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[22px] lg:leading-[26px] text-[#222831] m-0"> our expert designers will work with you to create a custom logo design that embodies your brand identity </p>
						</div>
					</div>
					<div className="w-full flex gap-[15px] md:gap-[30px]">
						<div className="max-w-[70px] md:max-w-[105px] w-full">
							<Image src={Services2} alt="" />
						</div>
						<div className="w-full flex flex-col gap-[10px]">
							<h4 className="text-[20px] md:text-[22px] lg:text-[28px] leading-[28px] md:leading-[30px] lg:leading-[36px] text-[#222831] m-0"> Unlimited revisions </h4>
							<p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[22px] lg:leading-[26px] text-[#222831] m-0"> We'll provide unlimited revisions </p>
						</div>
					</div>
					<div className="w-full flex gap-[15px] md:gap-[30px]">
						<div className="max-w-[70px] md:max-w-[105px] w-full">
							<Image src={Services3} alt="" />
						</div>
						<div className="w-full flex flex-col gap-[10px]">
							<h4 className="text-[20px] md:text-[22px] lg:text-[28px] leading-[28px] md:leading-[30px] lg:leading-[36px] text-[#222831] m-0"> Satisfaction </h4>
							<p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[22px] lg:leading-[26px] text-[#222831] m-0"> 100% satisfied with the design </p>
						</div>
					</div>
					<div className="w-full flex gap-[15px] md:gap-[30px]">
						<div className="max-w-[70px] md:max-w-[105px] w-full">
							<Image src={Services4} alt="" />
						</div>
						<div className="w-full flex flex-col gap-[10px]">
							<h4 className="text-[20px] md:text-[22px] lg:text-[28px] leading-[28px] md:leading-[30px] lg:leading-[36px] text-[#222831] m-0"> On time delivery </h4>
							<p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[22px] lg:leading-[26px] text-[#222831] m-0"> We 100% guarantee to deliver on time </p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="w-full flex gap-[25px] flex-col lg:flex-row justify-between items-center">
			<div className="w-full relative">
				<div className="absolute top-[-170px] left-[40px] w-[65%] hidden lg:block">
					<Image src={stepborder2} alt="" />
				</div>
				<h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#222831] font-semibold mb-[24px] flex gap-[15px] md:gap-[27px]">
					<b className="text-[#00ADB5] text-[30px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-bold">#3</b> Move on to stationary design
				</h2>
				<div className="w-full flex flex-col gap-[45px] mt-[45px]">
					<ul className="w-full flex flex-col gap-[23px] text-[18px] text-[#222831] max-w-[500px] w-full pl-[50px]">
						<li className="flex gap-[30px] m-0"> {" "} <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px]"></div>{" "} Business cards </li>
						<li className="flex gap-[30px] m-0"> {" "} <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px]"></div>{" "} Letterheads </li>
						<li className="flex gap-[30px] m-0"> {" "} <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px]"></div>{" "} Other branded materials that are consistent with your brand identity. </li>
						<li className="flex gap-[30px] m-0"> {" "} <div className="min-w-[10px] h-[10px] block bg-[#00ADB5] mt-[5px]"></div>{" "} We'll design custom social media covers to help you extend your brand across social media platforms. </li>
					</ul>
				</div>
			</div>
			<div className="max-w-[500px] w-full lg:mt-[-70px]">
				<Image src={branding3} alt="" />
			</div>
		</div>
	</div>
</div>
  );
};

export default StartGetting;
