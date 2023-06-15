import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiscountedPrice } from "../../redux/features/discounted-plan-price";

import { setPricing } from "../../redux/features/pricing-slice";
import Checkout from "./checkout";
import PricePlan from "./price-plan";
import TitleVector from "../svgs/TitleVector";
import _ from "lodash";
const PriceArea = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [plans, setPlans] = useState([]);
  const { pricing, selectedPlan, discountedPrice } = store;
  const checkoutActive = useSelector((state) => state.checkoutActive);

  useEffect(() => {
    getplans();
  }, []);

  useEffect(() => {
    if (pricing) {
      readjustPricing();
    }
  }, [pricing]);

  const readjustPricing = () => {
    let plan = selectedPlan;
    if (plan) {
      let dcPrice = Math.ceil(plan?.price * 0.85);
      dispatch(setDiscountedPrice(dcPrice));
    }
  };

  const getplans = async () => {
    const data = await fetch(`/api/plans`);
    const res = await data.json();
    const resPlans = res?.plans?.data?.plans;
    const sortedPlans = _.orderBy(resPlans, (plan) => plan.id);
    console.log("plans", sortedPlans);
    setPlans(sortedPlans);
  };

  return (
    <>
      <div className="cp-price-area pt-120 pb-20" id="Package-Plan">
        <div className="max-w-[1320px] w-full px-[15px] mx-auto">
          <div className="flex justify-center">
            <div className="max-w-[750px] w-full">
              <div className="tp-service-section-box text-center pb-60">
                <h5 className="tp-subtitle pb-10">Subscription Levels</h5>
                <h2 className="tp-title-sm">
                  Select the plan that best fits your{" "}
                  <span className="tp-section-highlight">
                    requirements.
                    <TitleVector />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full">
              <div className="quarterly-swicher">
                <p>
                  <b>Monthly</b>
                </p>
                <input
                  id="quarterly"
                  type="checkbox"
                  onChange={(e) => {
                    dispatch(setPricing(e.target.checked));
                  }}
                />
                <label htmlFor="quarterly"></label>
                <p>
                  Quarterly <small>Save 15%</small>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap xecutor-pricing-table-container">
            {plans.map((plan, i) => (
              <PricePlan plan={plan} key={i} />
            ))}
          </div>
        </div>
      </div>
      {checkoutActive && <Checkout />}
    </>
  );
};

export default PriceArea;
