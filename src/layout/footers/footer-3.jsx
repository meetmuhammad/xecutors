import Link from "next/link";
import React from "react";
import Image from "next/image";
import SocialLinks from "../social-links";
import CopyrightArea from "./component/copyright-area";

const footer_contents = {
  logo: "/assets/img/logo/lightlogo.svg",
  widget_desc: "",
  footer_widgets: [
    {
      w_class: "d-flex justify-content-lg-center",
      title: "Software Development",
      widget_lists: [""],
    },
    {
      padd: "pl-20",
      title: "Community",
      widget_lists: [
        "Home",
        "Services",
        "About us",
        "Blogs",
        "Contact us",
      ],
    },
  ],
  subscribe_title: "Subscribe Newslatter",
  subscribe_text:
    "Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo",
  copy_right_text: <>© 2023 Xecutors (Private) Limited. All rights reserved.</>,
  conditions: [
    {name: "Privacy policy", url: 'privacy-policy'},
    { name: "Terms of Use", url: "terms-conditions" },
    {name:  "FAQs", url:'#faq-section'},
  ],
};

const {
  conditions,
  copy_right_text,
  footer_widgets,
  logo,
  widget_desc,
  subscribe_text,
  subscribe_title,
} = footer_contents;

const FooterThree = ({ home_four = false }) => {
  return (
    <React.Fragment>
      <footer>
        <div className="tp-footer-area black-bg pt-100 pb-30">
          <div className="max-w-[1320px] mx-auto px-[12px]">
          
            <div className="flex flex-wrap">
            <div className="w-full mobile-show">
                <img className="footer-logo" width={250} height={45} src={logo} alt="" />
                </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h3 className="footer-title">Software Development</h3>
              <ul>
                <li> <a href="/software-development">Custom Software Development</a> </li>
                <li> <a href="/custom-web-application">Web Application Development</a> </li>
                <li> <a href="/particular-service-landing">Particular Service</a> </li>
                <li> <a href="/mobile-application-development">Mobile Application Development</a> </li>
                <li> <a href="#">Front End Development</a> </li>
                <li> <a href="#">Prototyping</a> </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h3 className="footer-title">Cloud Services</h3>
              <ul>
                <li> <a href="#">Cloud Computing</a> </li>
                <li> <a href="#">Google Cloud Platform (GCP)</a> </li>
                <li> <a href="#">Amazon Web Services (AWS)</a> </li>
                <li> <a href="#">Microsoft Azure</a> </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h3 className="footer-title">Emerging Technologies</h3>
              <ul>
                <li> <a href="#">Artificial Intelligence (AI)</a> </li>
                <li> <a href="#">DevOps, Blockchain</a> </li>
                <li> <a href="#">Internet of Things (IoT)</a> </li>
                <li> <a href="#">Augmented Reality (AR)</a> </li>
                <li> <a href="#">Virtual Reality (VR)</a> </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h3 className="footer-title">Consultancy & Advisory</h3>
              <ul>
                <li> <a href="#">IT Strategy Consulting</a> </li>
                <li> <a href="#">Business Process Improvement</a> </li>
                <li> <a href="#">Product Management</a> </li>
                <li> <a href="#">Project Management</a> </li>
              </ul>
            </div>

            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                <div className="tp-footer-subscribe">
              <p>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Enter your email Address" />
                        <button className="tp-btn" type="submit">
                        Subscribe
                        </button>
                      </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mobile-hidden">
                <img className="footer-logo" width={250} height={45} src={logo} alt="" />
                </div>
              </div>
            </div>
            </div>
            
          </div>

          {/* CopyrightArea start */}
          <CopyrightArea
            copy_right_text={copy_right_text}
            conditions={conditions}
          />
          {/* CopyrightArea end */}
          
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterThree;

const InstagramItem = ({ img }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
      <div className="tp-footer-widget__tp-insta-img mb-15">
        <img
          className="w-100"
          src={`/assets/img/footer/footer-${img}.webp`}
          alt=""
        />
        <div className="tp-footer-widget__tp-insta-img-icon">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
