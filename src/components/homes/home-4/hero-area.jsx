import Link from "next/link";
import React, { useState } from "react";
import useModal from "../../../hooks/use-modal";
import VideoModal from "../../common/modals/modal-video";
import Calendaly from "../../contact/calendaly";
import TitleVector from "../../svgs/TitleVector";

const hero_contents = {
  shapes: [{ img: "hero-shape-4" }, { num: "-two", img: "hero-shape-4.1" }],
  title: (
    <>
      Exquisite design and development at a{" "}
      <font className="tp-section-highlight">
        fraction
        <TitleVector />
      </font>{" "}
      of the cost.
    </>
  ),
  text: `Create exceptional products faster and easier than ever before with our scalable design and advanced next-gen development solutions.`,
  btn_text: `Book a Free Call`,
  video_title: "Behind the scenes",
  video_id: "LJbkLdtEW00",
};

const { btn_text, shapes, social_links, text, title, video_id, video_title } =
  hero_contents;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [showCalendaly, setShowCalendaly] = useState(false);

  const handleBookCall = () => {
    setShowCalendaly(true);
  };

  return (
    <React.Fragment>
      <div className="tp-hero-area-two pt-120 p-relative fix">
        <div className="tp-hero-yellow-shape d-none d-lg-block"></div>
        {shapes.map((s, i) => (
          <div
            key={i}
            className={`ce-hero-shape${s.num ? s.num : ""} d-none d-lg-block`}
          >
            <img src={`/assets/img/hero/${s.img}.webp`} alt="" />
          </div>
        ))}
        <div className="max-w-[1320px] w-full px-[12px] mx-auto">
          <div className="w-full flex flex-col-reverse lg:flex-row revert-mobile">
            <div className="w-full lg:w-1/2">
              <div className="tp-hero-section-box tp-hero-section-box-four pt-170 pb-100">
                <h3
                  className="tp-hero-bd-title text-black wow tpfadeUp text-[62px] leading-[1.1] pb-[30px]"
                  data-wow-duration=".3s"
                  data-wow-delay=".6s"
                >
                  {title}
                </h3>
                <p
                  className="wow tpfadeUp text-[#8A90A2] text-[18px] leading-[30px] pb-[35px] realtive z-[2]"
                  data-wow-duration=".5s"
                  data-wow-delay=".7s"
                >
                  {text}
                </p>
                <div
                  className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  <button onClick={handleBookCall} className="tp-btn mr-20">
                    {btn_text}
                  </button>
                  <Link href="#Package-Plan">
                    <a className="tp-btn outline mr-20">See Pricing</a>
                  </Link>
                  <div className="tp-hero-paly-button-four"></div>
                </div>

                <div className="hero-section-quote">
                  <span>
                    <i className="fas fa-info-circle"></i> Includes a discovery
                    call, project audit, initial design & development discussion
                  </span>
                </div>

                <div className="row">
                <div className="quote-section small">
                  <p> It's not about ideas. It's about making ideas happen.</p> <h4>Steve Jobs</h4>
              
                </div>
        </div>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 wow fadeInRight"
              data-wow-duration=".7s"
              data-wow-delay=".9s"
            >
              <div className="tp-hero-right-img-four pb-120 pt-90">
                <img src={"/assets/img/hero/hero-5.webp"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={video_id}
      />
      {/* video modal end */}

      {showCalendaly && (
        <div className="BookCallModal">
          <div className="BookCallContainer">
          <Calendaly />
          <div className="closeFrame" onClick={() => setShowCalendaly(false)}> close</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default HeroArea;
