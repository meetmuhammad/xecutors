import React,{useState} from 'react';
import Image from "next/image";
import ContactForm from '../forms/contact-form';
import Calendaly from './calendaly';
const CallToAction = () => {
  const [showCalendaly, setShowCalendaly] = useState(false);
  const handleBookCall = () => {
    setShowCalendaly(true);
  };
  return (
    <>
    {showCalendaly && (
        <div className="BookCallModal">
          <div className="BookCallContainer">
          <Calendaly />
          <div className="closeFrame" onClick={() => setShowCalendaly(false)}> close</div>
          </div>
        </div>
      )}
      <div className="w-full px-[30px] mb-80 container rounded-[20px] tp-contact-area black-bg pt-20">
        <div className="w-full">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-[33.33333333%] mb-[30px] md:mb-0">
              <div className="tp-contct-wrapper">
                <div className="tp-contact-thumb">
                  <img src="/assets/img/contact/angel_partner.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[58.33333333%]">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title"> We can be your <b className='text-white'>angel partner</b></h4>
               <p className='text-white'>Not sure what to pick? Get your first week 100% for free to dive into your vision. No credit card required.</p>
               <button className='tp-btn' onClick={handleBookCall}>Book a call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;