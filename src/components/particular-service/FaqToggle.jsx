import React from "react";
import { HighlightTwo } from "../../svg";

const accordion_items = [
  {
    id: "one",
    show: true,
    title: "What is included in a Corporate Identity Kit?",
    desc: "A Corporate Identity Kit typically includes a collection of visual assets, such as a logo, business card, letterhead, envelope, and other branded materials that establish a cohesive and professional visual identity for your company.",
  },
  {
    id: "two",
    title:
      "How long does it take to design a Corporate Identity Kit?",
    desc: "No, there is no limit to the number of design or development projects you can submit per month. Our subscription plans offer unlimited design, development, and changes, along with up to a specific number of service credits per month depending on your plan.",
  },
  {
    id: "three",
    title: "Can I customize the colors and design elements of my Corporate Identity Kit?",
    desc: "Service credits are actually the number of hours you get each month to spend on different services provided by Xecutors. (1 Service Credit = 1 Hour of work done)",
  },
  {
    id: "four",
    title: "What file formats will I receive for my Corporate Identity Kit?",
    desc: "You can top up your service credits if you happen to consume your quota before the end of the month",
  },
  {
    id: "five",
    title: "Do you offer printing services for the Corporate Identity Kit?",
    desc: "Each additional service credit will cost $35.",
  },
  {
    id: "six",
    title:
      "Can I get a refund if I am not satisfied with the Corporate Identity Kit?",
    desc: "Your service credits will get transferred to the next month's balance if you ever happened to have not consumed your complete service credits in a month (Monthly plan subscribers will have to purchase the subscription of the next month in 7 days to get their service credits added to the balance of the next month)",
  },
  {
    id: "seven",
    title:
      "How many revisions are included in the design process for a Corporate Identity Kit?",
    desc: "The time it takes to complete your requests will depend on the complexity of the project and the number of other projects in the queue. However, we strive to complete all requests as quickly as possible and will communicate with you throughout the process to provide updates on the status of your projects.",
  },
  {
    id: "eight",
    title: "What is the cost of a Corporate Identity Kit?",
    desc: "By the term unlimited, we really mean unlimited. You can make as many requests as you’d want until you get satisfied with the work done",
  },
  {
    id: "nine",
    title: "How does the design process work for a Corporate Identity Kit?",
    desc: "Yes, you can cancel your subscription at any time. However, please note that we do not offer refunds for unused portions of your subscription.",
  },
  {
    id: "ten",
    title: "What is the turnaround time for receiving my Corporate Identity Kit?",
    desc: "Yes, you can cancel your subscription at any time. However, please note that we do not offer refunds for unused portions of your subscription.",
  },
];

const FaqToggle = () => {
  return (
    <>
      <div id="faq-section" className="sd-accordio-area">
        <div className="w-full">
        <div className="tp-custom-accordio faq-accordio-border">
                <div className="accordion" id="accordionExample">
                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return (
                      <div key={id} className="accordion-items">
                        <h2 className="accordion-header" id={`heading-${id}`}>
                          <button
                            className={`accordion-buttons ${
                              show ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${id}`}
                            aria-expanded={show ? "true" : "false"}
                            aria-controls={`collapse-${id}`}
                          >
                            {title}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${id}`}
                          className={`accordion-collapse collapse ${
                            show ? "show" : ""
                          }`}
                          aria-labelledby={`heading-${id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">{desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default FaqToggle;
