import React, { useState } from "react";
import PaymentCard from "./payment-card";
import PaymentForm from "./payment-form";
import { useDispatch } from "react-redux";
import { pricngData } from "./pricing-plans";
import { setCheckoutActive } from "../../redux/features/checkout-active-slice";

function FreePlan() {
  const freePlanFilt = pricngData?.filter(
    (data) => data.planName === "Exploration Week"
  );
  const freePlanData = freePlanFilt[0];
  const dispatch = useDispatch();

  const handleBookCall = () => {
    dispatch(setCheckoutActive(true));
  };

  return (
    <div className="w-full lg:w-1/3">
      <div className="xecutor-pricing-table active">
        <h3>{freePlanData?.planName}</h3>
        <p>{freePlanData?.description}</p>
        <div className="xecutor-pricing-inner">
          <h2>{freePlanData?.price > 0 ? freePlanData?.price : "FREE"}</h2>
          {freePlanData?.features?.map((feature, i) => {
            return (
              <div key={i} className="xecutor-pricing-toggle">
                <input id={feature?.fid} name="pricing-free" type="radio" />
                <label htmlFor={feature?.fid}>{feature?.name}</label>
                <div className="xecutor-pricing-content">
                  <p>{feature?.description}</p>
                </div>
              </div>
            );
          })}

          <div className="text-center">
            <button onClick={handleBookCall}  className="Xecutebtn tp-btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreePlan;
