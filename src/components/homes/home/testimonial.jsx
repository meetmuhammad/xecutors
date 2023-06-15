import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const testimonial_data = [
  {
    id: 1,
    user: "/assets/img/testimonial/testi-1.webp",
    name: "Emily Johnson,",
    title: "Marketing Director of GreenWorld Corp",
    ratings: [1, 2, 3, 4, 5],
    desc: "I've been working with [Your Company Name] for over a year, and their web development expertise has made a huge difference in our online presence. The team is incredibly professional, skilled, and responsive to our needs. I highly recommend them to anyone looking to enhance their online business!",
  },
  {
    id: 2,
    user: "/assets/img/testimonial/testi-2.webp",
    name: "Floyd Miles",
    title: "CEO of Orix",
    ratings: [1, 2, 3, 4],
    desc: "Xecutors has exceeded our expectations with their software development services. The team is knowledgeable, attentive, and always willing to go the extra mile to ensure our satisfaction. We're grateful for their continued support and would recommend their services without hesitation.",
  },
  {
    id: 3,
    user: "/assets/img/testimonial/testi-3.webp",
    name: "Albert Flores",
    title: "Manager at Oreol",
    ratings: [1, 2, 3, 4, 5],
    desc: "We turned to Xecutors for a complete website redesign, and they delivered a user-friendly, visually stunning website that has significantly improved our online presence. Their dedication to meeting deadlines and their responsive communication made the entire process a pleasure.",
  },
  {
    id: 4,
    user: "/assets/img/testimonial/testi-1.webp",
    name: "Jane Smith",
    title: "CEO of TechStart Inc",
    ratings: [1, 2, 3, 4, 5],
    desc: "I have been working with Xecutors for several months now, and their attention to detail and quality of work is unmatched. They took the time to understand our unique requirements and crafted custom solutions that have greatly improved our business operations.",
  },
];

const testimonial_2_data = [
  {
    id: 1,
    user: "/assets/img/testimonial/testi-4.webp",
    name: "Peter Thompson",
    title: "CTO of HealthBridge Solutions",
    ratings: [1, 2, 3, 4, 5],
    desc: "Xecutors has been a true partner for our software development needs. Their team's technical expertise, along with their ability to understand our vision and goals, has led to the successful completion of multiple projects. We look forward to continuing our collaboration in the future.",
  },
  {
    id: 2,
    user: "/assets/img/testimonial/testi-5.webp",
    name: "Sarah Wilson",
    title: "Marketing Manager of ArtSpace Gallery",
    ratings: [1, 2, 3, 4],
    desc: "As a startup, finding a reliable and skilled web development partner was crucial to our success. Xecutors delivered exceptional results, helped us launch our website on time, and provided valuable insights throughout the process. We couldn't have asked for a better experience!",
  },
  {
    id: 3,
    user: "/assets/img/testimonial/testi-6.webp",
    name: "Kevin Garcia",
    title: "COO of LogisticsPro Inc",
    ratings: [1, 2, 3, 4, 5],
    desc: "We partnered with Xecutors for a complex software project, and their team's expertise was invaluable. They were able to quickly grasp our requirements, adapt to our evolving needs, and deliver a high-quality product on schedule. We couldn't be happier with the outcome.",
  },
  {
    id: 4,
    user: "/assets/img/testimonial/testi-5.webp",
    name: "Laura Martin",
    title: "CEO of EcoVentures Inc",
    ratings: [1, 2, 3, 4, 5],
    desc: "Our experience with Xecutors has been nothing short of outstanding. They've helped us create a beautiful, responsive website that truly reflects our brand identity. Their technical skills, creativity, and commitment to customer satisfaction are unparalleled in the industry.",
  },
];

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className="tp-testimonial-area fix" id="testimonials">
        <div className="w-full px-[12px]">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="tp-testimonial-section-box text-center pb-25">
                <h5 className="tp-subtitle">Client Testimonial</h5>
                <h2 className="tp-title tp-white-text">Customer feedback</h2>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-slider-section flex justify-center mb-50">
            {/* slider start */}

            <Marquee
              className="gap-4 items-center"
              speed={50}
              pauseOnHover={true}
            >
              {testimonial_data.map((item, i) => (
                <div key={i} className="tp-testimonial-item">
                  <div className="tp-testi-meta d-flex justify-content-between mb-20">
                    <div className="tp-testi-icon-box d-flex align-items-center">
                      <div className="tp-testi-img mr-20">
                        <Image
                          width={61}
                          height={61}
                          src={item.user}
                          alt=""
                          loading="eager"
                        />
                      </div>
                      <div className="tp-testi-client-position">
                        <h3>{item.name}</h3>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="tp-testi-p-text">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Marquee>
            {/* slider end */}
          </div>

          {/* slider 2 start */}
          <div className="tp-testimonial-slider-section-2 d-flex justify-content-center">
            <Marquee
              className="gap-4 items-center"
              speed={50}
              direction="right"
              pauseOnHover={true}
            >
              {testimonial_2_data.map((item, i) => (
                <div key={i} className="tp-testimonial-item">
                  <div className="tp-testi-meta d-flex justify-content-between mb-20">
                    <div className="tp-testi-icon-box d-flex align-items-center">
                      <div className="tp-testi-img mr-20">
                        <Image
                          width={61}
                          height={61}
                          src={item.user}
                          alt=""
                          loading="eager"
                        />
                      </div>
                      <div className="tp-testi-client-position">
                        <h3>{item.name}</h3>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="tp-testi-p-text">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          {/* slider 2 end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
