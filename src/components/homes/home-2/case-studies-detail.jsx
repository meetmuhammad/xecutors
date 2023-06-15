import React from "react";
import TitleVector from "../../../components/svgs/TitleVector"

const CaseStudiesDetail = ({ data }) => {
  return (
    <div className="tp-project-area pt-80 p-relative caseSyudy-detail-container">
      <div className="breadcrumb__area p-relative">
        <div className="max-w-[1280px] px-[12px] mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
            <h3 className="breadcrumb__title">
              <small>{data?.type}</small>
              <span className="tp-highlight"> <TitleVector />
              <i>{data?.name}</i>
              </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-[12px]">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="caseStudyCard detail">
             
              <div className="flex flex-wrap caseStudyCard-caption items-center">
                <div className="w-full text-center">
                <img
                className="casestudy-cover mx-auto"
                src="../assets/img/case/CaseStudy-New1.webp"
                alt=""
              /> <br /> <br /> <br />
                </div>

                <div className="w-full text-center">
                    <h4 className="text-black"> Reimagining Travel Booking: The Story of eTravelo and Xecutors </h4>
                    <p className="max-w-[1016px] mx-auto">{data?.introduction}</p>
                </div>
              </div>

              <div className="flex flex-wrap caseStudyCard-caption content mt-[50px]">
               

                <div className="order-1 md:order-2 w-full md:w-1/2 pt-[10px] md:pt-[380px] px-[12px]">
                    <h4>Innovating Beyond the Limits: <br /> How Xecutors Revolutionized eTravelo's Hotel Booking</h4>
                    
                    {/* <p>{data?.challenges}</p> */}
                    <p>Xecutors recently completed a ground-breaking project with eTravelo, an online airline ticket and hotel booking platform. The project, aptly named eTravelo, aimed to revolutionize the travel industry by streamlining the user experience and providing lightning-fast search results. This case study outlines the key challenges faced by eTravelo, the innovative solutions provided by Xecutors, and the impressive results achieved through this collaboration.
</p>
                </div>
                <div className="order-2 md:order-1 w-full md:w-1/2 relative text-right px-[12px]">
                <img
                className="casestudy-cover absolute-img"
                src="../assets/img/case/CaseStudy-New3.webp"
                alt=""
              />
                <img
                className="casestudy-cover"
                src="../assets/img/case/CaseStudy-New2.webp"
                alt=""
              />
                </div>
              </div>

              <div className="flex flex-wrap caseStudyCard-caption content">
            
                <div className="w-full px-[12px] text-center mb-[50px]">
                
                <h4>Xecutors Enhances eTravelo's User Experience with Lightning-Fast <br /> Speeds and Extensive Booking Options</h4>
              
                </div>


                <div className="w-full md:w-[41.66666667%] px-[12px]">
                <img
                  className="img-frame border"
                  src="../assets/img/case/CaseStudy-New9.webp"
                  alt=""
                />
                </div>
                <div className="w-full md:w-[58.33333333%] px-[12px] mb-[50px] md:mb-0">
                <p>Xecutors implemented a complete revamp of eTravelo's website, transforming it into a serverless site. This allowed for improved scalability and performance, enabling the platform to handle an increased volume of users without any hiccups.</p>
                <div className="bg-[#F1F1F1] p-[25px] rounded-[20px] md:rounded-[36px] mt-[30px] text-center">
                <img width="400" src="../assets/img/case/CaseStudy-New11.webp" alt="" />
                <hr />
                  <p className="text-[#2c2c2c]">One of the most significant innovations Xecutors introduced was the automatic booking functionality. This game-changing feature provides instant search results, allowing eTravelo's site to function at lightning-fast speeds. By enhancing the platform's user experience, customers can now quickly and easily book their ideal travel arrangements.</p>
                  <p className="text-[#2c2c2c]">Furthermore, Xecutors developed a patented hotel reservation engine that resolved eTravelo's previous issues. This powerful new engine allows eTravelo's customers access to an extensive range of options, many of which are not readily available or easily bookable on other platforms.</p>
                  
                </div>
                </div>
              </div>


              <div className="flex flex-wrap caseStudyCard-caption items-center">

              <div className="w-full text-center">
                    <h4 className="text-black">From Challenges to Success: The Results of Xecutors' <br /> Collaboration with eTravelo</h4>
                    <p className="max-w-[800px] mx-auto">
                    eTravelo's management was thoroughly impressed with Xecutors' innovative approach to addressing their challenges. The revamped platform has been praised by customers for its speed, ease of use, and extensive range of options
                      </p>
                </div>
                
                <div className="w-full text-center">
                <img
                className="casestudy-cover"
                src="../assets/img/case/CaseStudy-New10.png"
                alt=""
              />
                </div>

               
              </div>


              

             
          

            </div>
          </div>
        </div>
      </div>

        <div className="max-w-[1280px] w-full mx-auto px-[12px]">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="xecu-caseStudy-section">
                <div className="max-w-[790px]">
                <h3>Bring Your Ideas to Life with Xecutors: Book Your Consultation Today</h3>
              <p>Xecutors implemented a complete revamp of eTravelo's website, transforming it into a serverless site. This allowed for improved scalability and performance, enabling the platform to handle an increased volume of users without any hiccups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      <div className="max-w-[1280px] w-full px-[12px] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="caseStudyCard detail">
              <div className="caseStudyCard-caption"> 
                <div className="caseStudyCard-caption-foot">
                  
                  <div className="caseStudyCard-posted">
                    <img src="../assets/img/case/CaseStudy2.webp" alt="" />
                    <h5>
                      {data?.author} <small>{data?.authorDesignation}</small>{" "}
                    </h5>
                  </div>
                  <small>{data?.date}</small>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CaseStudiesDetail;
