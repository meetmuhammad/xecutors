import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutActive } from "../../redux/features/checkout-active-slice";
import { setSelectedPlan } from "../../redux/features/selected-plan-slice";

const PricePlan = ({ plan }) => {
  // const dispatch = useDispatch();
  const pricing = useSelector((state) => state.pricing);
  const handleBookCall = async () => {
    // dispatch(setCheckoutActive(true));
    // dispatch(setSelectedPlan(plan));
    console.log("checkout", plan);
    const prodId = pricing ? plan?.planidquarterly : plan?.planidmonthly;
    const quantity = pricing ? 3 : 1;
    const reqData = { prodId, quantity };
    fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(reqData),
    })
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((json) => {
        console.log("json", json);
        window.location.href = json.url;
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div className="w-full lg:w-1/3">
      <div className={`xecutor-pricing-table ${plan?.price === 0 && "active"}`}>
        <h3>{plan?.name}</h3>
        <p>{plan?.description}</p>

        <div className="xecutor-pricing-inner">
          {plan?.price > 0 ? (
            <h2>
              {!pricing
                ? `$${Number(plan?.price).toLocaleString()}/m`
                : `$${Math.ceil(plan?.price * 0.85).toLocaleString()}/m`}{" "}
              {pricing && (
                <label>you saved {Math.floor(plan?.price * 0.15)} </label>
              )}
            </h2>
          ) : (
            <h2>Free</h2>
          )}

          {plan?.features?.map((feature, i) => {
            return (
              <div key={i} className="xecutor-pricing-toggle">
                <input id={feature.fid} name="scaleup-plan" type="radio" />
                <label htmlFor={feature.fid}>
                  {" "}
                  {feature?.freeLabel && <small>Free</small>} {feature?.name}
                </label>
                <div className="xecutor-pricing-content">
                  <p> {feature?.description}</p>
                </div>
              </div>
            );
          })}

          <div className="text-center">
            <button onClick={handleBookCall} className="Xecutebtn tp-btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
