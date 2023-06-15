import React from "react";
import Image from "next/image";
import { team_data } from "../../data";
import featureicon from "../../../public/assets/img/software-development/feature-icon.svg";
import featureicon2 from "../../../public/assets/img/software-development/feature-icon2.svg";
import devider from "../../../public/assets/img/software-development/devider.svg";
const teams = team_data.filter((team) => team.about_p);

const FeatureItems = () => {
  return (
    <section className="w-full section-gradient relative section-bottom-shape section-top-shape overflow-hidden px-[20px] pb-[50px] md:pb-[130px]">
      <div className="max-w-[1344px] w-full mx-auto relative z-[99]">
        <div id="#features" className="w-full flex flex-col gap-[55px]">
          <h2 className="text-[#00ADB5] text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] leading-[38px] sm:leading-[50px] md:leading-[60px] xl:leading-[77px] m-0 text-center">
            Features
          </h2>

          <div className="lg:max-w-[800px] xl:max-w-[1020px] w-full flex mx-auto px-[20px] sm:px-[50px] lg:px-0">
            <div className="w-full flex flex-col gap-[30px] lg:gap-[60px] items-start relative">
              <div className="hidden lg:block absolute left-[50%] translate-x-[-50%] top-0 bottom-0 overflow-hidden pointer-events-none">
                <Image src={devider} alt="" />
              </div>

              {/* Left */}
              <div className="lg:max-w-[547px] xl:max-w-[658px] lg:h-[200px] w-full bg-[#F9F9F9] custom-box-shadow rounded-[15px] lg:rounded-[30px] py-[30px] xl:py-[40px] pr-[40px] pl-[45px] sm:pl-[80px] lg:pl-[60px] xl:pl-[94px] relative">
                <div className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] p-[8px] sm:p-0 bg-[#222831] rounded-[5px] sm:rounded-[10px] absolute translate-y-[-50%] left-[-20px] sm:left-[-40px] top-[50%] flex items-center justify-center">
                  {" "}
                  <Image src={featureicon} alt="" />{" "}
                </div>
                <h4 className="text-[20px] sm:text-[28px] leading-[28px] sm:leading-[36px] text-[#00ADB5] font-bold mb-[10px]">
                  Custom Coding
                </h4>
                <p className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#222831] m-0">
                  Our developers are experienced in a range of programming
                  languages and can create custom code to meet your specific
                  needs.
                </p>
              </div>
              {/* Right */}
              <div className="lg:max-w-[547px] xl:max-w-[658px] lg:h-[200px] w-full bg-[#F9F9F9] custom-box-shadow rounded-[15px] lg:rounded-[30px] py-[30px] xl:py-[40px] pl-[40px] pr-[45px] sm:pr-[80px] lg:pr-[60px] xl:pr-[94px] relative self-end">
                <div className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] p-[8px] sm:p-0 bg-[#222831] rounded-[5px] sm:rounded-[10px] absolute translate-y-[-50%] right-[-20px] sm:right-[-40px] top-[50%] flex items-center justify-center">
                  {" "}
                  <Image src={featureicon2} alt="" />{" "}
                </div>
                <h4 className="text-[20px] sm:text-[28px] leading-[28px] sm:leading-[36px] text-[#00ADB5] font-bold mb-[10px]">
                  Project Management
                </h4>
                <p className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#222831] m-0">
                  We have a dedicated project management team that ensures your
                  project is delivered on time, on budget, and to your
                  specifications.
                </p>
              </div>

              {/* Left */}
              <div className="lg:max-w-[547px] xl:max-w-[658px] lg:h-[200px] w-full bg-[#F9F9F9] custom-box-shadow rounded-[15px] lg:rounded-[30px] py-[30px] xl:py-[40px] pr-[40px] pl-[45px] sm:pl-[80px] lg:pl-[60px] xl:pl-[94px] relative">
                <div className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] p-[8px] sm:p-0 bg-[#222831] rounded-[5px] sm:rounded-[10px] absolute translate-y-[-50%] left-[-20px] sm:left-[-40px] top-[50%] flex items-center justify-center">
                  {" "}
                  <Image src={featureicon} alt="" />{" "}
                </div>
                <h4 className="text-[20px] sm:text-[28px] leading-[28px] sm:leading-[36px] text-[#00ADB5] font-bold mb-[10px]">
                  Quality Assurance
                </h4>
                <p className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#222831] m-0">
                  We use rigorous testing and quality assurance processes to
                  ensure that your custom software solution is robust, secure,
                  and error-free.
                </p>
              </div>
              {/* Right */}
              <div className="lg:max-w-[547px] xl:max-w-[658px] lg:h-[200px] w-full bg-[#F9F9F9] custom-box-shadow rounded-[15px] lg:rounded-[30px] py-[30px] xl:py-[40px] pl-[40px] pr-[45px] sm:pr-[80px] lg:pr-[60px] xl:pr-[94px] relative self-end">
                <div className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] p-[8px] sm:p-0 bg-[#222831] rounded-[5px] sm:rounded-[10px] absolute translate-y-[-50%] right-[-20px] sm:right-[-40px] top-[50%] flex items-center justify-center">
                  {" "}
                  <Image src={featureicon2} alt="" />{" "}
                </div>
                <h4 className="text-[20px] sm:text-[28px] leading-[28px] sm:leading-[36px] text-[#00ADB5] font-bold mb-[10px]">
                  Ongoing Support
                </h4>
                <p className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#222831] m-0">
                  We offer ongoing support and maintenance services to ensure
                  that your custom software solution continues to perform
                  optimally and meets your changing business needs.
                </p>
              </div>

              {/* Left */}
              <div className="lg:max-w-[547px] xl:max-w-[658px] lg:h-[200px] w-full bg-[#F9F9F9] custom-box-shadow rounded-[30px] py-[30px] xl:py-[40px] pr-[40px] pl-[45px] sm:pl-[80px] lg:pl-[60px] xl:pl-[94px] relative">
                <div className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] p-[8px] sm:p-0 bg-[#222831] rounded-[5px] sm:rounded-[10px] absolute translate-y-[-50%] left-[-20px] sm:left-[-40px] top-[50%] flex items-center justify-center">
                  {" "}
                  <Image src={featureicon} alt="" />{" "}
                </div>
                <h4 className="text-[20px] sm:text-[28px] leading-[28px] sm:leading-[36px] text-[#00ADB5] font-bold mb-[10px]">
                  User Experience Design
                </h4>
                <p className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#222831] m-0">
                  Our team of user experience designers can help you create
                  intuitive and user-friendly interfaces that improve engagement
                  and increase adoption.
                </p>
              </div>
              {/* Right */}
              <div className="lg:max-w-[547px] xl:max-w-[658px] lg:h-[200px] w-full bg-[#F9F9F9] custom-box-shadow rounded-[30px] py-[30px] xl:py-[40px] pl-[40px] pr-[45px] sm:pr-[80px] lg:pr-[60px] xl:pr-[94px] relative self-end">
                <div className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] p-[8px] sm:p-0 bg-[#222831] rounded-[5px] sm:rounded-[10px] absolute translate-y-[-50%] right-[-20px] sm:right-[-40px] top-[50%] flex items-center justify-center">
                  {" "}
                  <Image src={featureicon2} alt="" />{" "}
                </div>
                <h4 className="text-[20px] sm:text-[28px] leading-[28px] sm:leading-[36px] text-[#00ADB5] font-bold mb-[10px]">
                  Integration with Existing Systems
                </h4>
                <p className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#222831] m-0">
                  We can integrate your custom software solution with your
                  existing systems to ensure seamless operation and minimize
                  disruption to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureItems;
