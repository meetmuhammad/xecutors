import Link from "next/link";
import Image from "next/image";
import React from "react";
import { services_data } from "../../../data";
import { HighlightTwo } from "../../../svg";

const services_items = services_data.filter((ser) => ser.home_4);

const ServicesArea = () => {
  return (
    <div className="tp-service-area pt-120 pb-90 grey-bg" id="services">
      <div className="max-w-[1320px] w-full mx-auto px-[12px]">
        <div className="flex justify-center">
          <div className="max-w-[726px] w-full">
            <div className="tp-service-section-box text-center pb-60">
              <h5 className="tp-subtitle pb-10">What We Do?</h5>
              <h2 className="tp-title-sm">
                Here are some{" "}
                <span className="tp-section-highlight">
                  Services
                  <HighlightTwo />
                </span>{" "}
                we can help you with
              </h2>
              <p>
                That specializes in high-quality software development services,
                guided by strong ethics, collaboration, tenacity, and
                responsibility. Our experienced team delivers exceptional,
                customized solutions, exceeding clients.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {services_items.slice(0, 8).map((service, i) => {
            const { delay, duration, id, img, title, border_effect } = service;
            return (
              // <Link href={`/service-details/${id}`}>
              // </Link>
              <div
                key={i}
                className="w-1/2 lg:w-1/3 xl:w-[25%] px-[10px] sm:px-[15px] wow tpfadeUp"
                data-wow-duration={duration}
                data-wow-delay={delay}
              >
                <div className={`tp-sv-border-effect`}>
                  <div className={`tp-service-item-four mb-30`}>
                    <div className="tp-service-item-four__img  mx-auto mb-40">
                      <Image width={60} height={60} src={img} alt="" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">{title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div
            className="col-xl-3 col-lg-4 col-md-6 col-6 wow tpfadeUp"
            data-wow-duration="1.1s"
            data-wow-delay="1.3s"
          >
            <div className="sv-color-eight  mb-30">
              <div className="sv-color-eight__title text-center">
                <Link href={`/services`}>
                  <a>
                    <i className="fal fa-long-arrow-up mb-40"></i>
                  </a>
                </Link>
                <h3 className="tp-sv-sm-title">
                  <a href="#">More Services</a>
                </h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
