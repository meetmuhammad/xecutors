import React, { useState } from "react";
import PaymentCard from "./payment-card";
import PaymentForm from "./payment-form";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutActive } from "../../redux/features/checkout-active-slice";
import { setPaymentMethod } from "../../redux/features/payment-method-slice";
import { setUserDetails } from "../../redux/features/user-details-slice";
import { NhostClient } from "@nhost/nhost-js";
import nHostLib from "../../utils/nhostlib";

const Checkout = () => {
  const nhost = new NhostClient({
    subdomain: "xxmrosflewhpkjxiqhde",
    region: "eu-central-1",
  });
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const {
    selectedPlan: plan,
    pricing,
    discountedPrice,
    paymentMethod,
    userDetails,
    creditCardInfo,
  } = store;
  const [step, setStep] = useState(1);

  const handleuserDetails = (e) => {
    const { name, value } = e.target;
    dispatch(setUserDetails({ ...userDetails, [name]: value }));
  };

  const confirmPayment = async () => {
    console.log(userDetails, creditCardInfo);
    let customer = null;

    const customerData = await fetch('/api/stripe/create-customer', {
      method: "POST",
      body: JSON.stringify({
        name: creditCardInfo.name,
        email: userDetails.email,
        phone: userDetails.phone
      })
    });

    customer = await customerData.json();




    console.log("customer ---->", customer?.customer);
    const exp = [creditCardInfo.expiry.slice(0,2), creditCardInfo.expiry.slice(2,4)]
    console.log('expr ==->', exp);
    const cardData = await fetch('/api/stripe/save-card', {
      method: "POST",
      body: JSON.stringify({
        customer: customer?.customer?.id,
        cardnumber: creditCardInfo.number,
        expmonth: exp[0],
        expyear: exp[1]
      })
    });


    let card = await cardData.json();
    console.log('card ===>', card);

    const charge = await fetch('/api/stripe/create-payment')

    // const signupResponse = await nHostLib.signup(userDetails.email, "testString", {
    //   role: "customer",
    //   name: creditCardInfo.name,
    //   accounttype: "",
    //   usertype: "customer",
    //   phone: userDetails.phone,
    // });

    // console.log("Customer Sign up Response: ", signupResponse);
  };

  return (
    <div className="BookCallModal BookCallModal-checkout">
      <div className="select-package-container max-w-[1280px] w-full bg-[#fff] relative z-[99]">
        <div
          className="absolute right-[10px] lg:right-[25px] top-[10px] lg:top-[25px] custom-cross-btn w-[40px] h-[40px] z-[20] cursor-pointer"
          onClick={() => dispatch(setCheckoutActive(false))}
        ></div>
        <div className="w-full flex flex-col lg:flex-row relative">
          <div
            className={`w-full max-w-[250px] lg:max-w-[530px] mx-auto  ${
              step === 1 ? `bg-[#B5B5B5] h-[1px]` : `bg-[#000000] h-[2px]`
            } absolute z-[22] left-0 right-0 top-[50px]`}
          >
            <span className="absolute left-[-20px] top-[-8px] flex gap-[10px] flex-col text-[14px] lg:text-[16px] text-[#222831] justify-center items-center">
              {" "}
              <div
                className={`w-[18px] h-[18px] border rounded-full bg-[#F7F7F7] p-[3px] border-color ${
                  step > 1 && `bg-black`
                }`}
              >
                {" "}
                <div className="w-full h-full border-2 rounded-full"></div>{" "}
              </div>{" "}
              Billing
            </span>
            <span
              className={`absolute right-[-40px] top-[-8px] flex gap-[10px] flex-col text-[14px] lg:text-[16px] ${
                step < 2 ? `text-[#AAA9A9]` : `text-black`
              } justify-center items-center`}
            >
              {" "}
              <div
                className={`w-[18px] h-[18px] bg-[#F7F7F7] rounded-full p-[3px] border-color border`}
              >
                {" "}
                <div className="w-full h-full border-2 rounded-full"></div>{" "}
              </div>{" "}
              Confirmation
            </span>
          </div>
          <div className="w-full lg:w-[50%] bg-[#F7F7F7] px-[20px] sm:px-[40px] lg:px-[74px] pt-[130px] md:pt-[160px] pb-[200px] relative">
            <h2 className="flex flex-col gap-[10px] m-0 text-[#222831] text-[36px] lg:text-[40px] leading-[47px]">
              {plan?.price > 0
                ? `$${pricing ? discountedPrice : plan?.price}/m`
                : `Free`}
              <small className="text-[20px] lg:text-[25px] text-[#222831]">
                {plan?.name}
              </small>{" "}
            </h2>
            <p className="border-b pb-[10px] text-[#222831]">
              {plan?.description}
            </p>
            <p className="text-[#222831]">
              It includes Exploration Week (free), Design & Development
              Requests, Meetings & Reports and Service Credits
            </p>
            <div className="w-full flex justify-between items-center my-[20px]">
              <span className="text-[#000000] text-[16px] m-0">
                Total agency bill
              </span>
              <span className="text-[#000000] text-[16px] m-0">
                ${pricing ? discountedPrice : plan?.price}/m
              </span>
            </div>

            <div className="w-full flex justify-between items-center my-[20px]">
              <span className="text-[#000000] text-[16px] m-0">
                Exploration week
              </span>
              <div className="flex items-center gap-[10px]">
                <span className="text-[#000000] text-[16px] m-0 relative">
                  {" "}
                  <span className="w-full border-b-2 border-[#000] absolute left-0 top-[10px] rotate-[-5deg]"></span>{" "}
                  $350/week
                </span>
                <span className="w-[50px] h-[18px] bg-[#00ADB5] rounded-full text-[#fff] leading-[18px] text-[12px] text-center">
                  Free
                </span>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-[20px] border-y py-[10px]">
              <span className="text-[#000000] text-[16px] m-0">Tax</span>
              <span className="text-[#000000] text-[16px] m-0">$0</span>
            </div>

            <div className="w-full flex justify-between items-center my-[20px] font-bold">
              <h6 className="text-[#000000] text-[16px] m-0">Total</h6>
              <h6 className="text-[#000000] text-[16px] m-0">${pricing ? discountedPrice : plan?.price}/m</h6>
            </div>

            <img
              className="w-[250px] absolute left-0 bottom-0"
              src="../../assets/img/news/cart-img.png"
              alt=""
            />
          </div>

          {/* Confirm Step */}
          <div
            className={`${
              step !== 1 && `hidden`
            } w-full lg:w-[50%] pt-[50px] lg:pt-[160px] px-[20px] sm:px-[50px] lg:px-[100px] flex flex-col items-start gap-[10px]`}
          >

<div className="w-full flex flex-col">
              <h4 className="text-[20px] text-[#222831]">Personal Information</h4>
              <span className="text-[13px] text-[#222831]">
                Select the address that matches your card or payment method.
              </span>
            </div>

            <form className="w-full flex flex-col mb-[30px]" action="">
              <input
                onChange={handleuserDetails}
                value={userDetails.email}
                className="w-full border-b py-[10px]"
                name="email"
                type="email"
                placeholder="Email"
              />
              <div className="w-full relative">
                <input
                  onChange={handleuserDetails}
                  value={userDetails.phone}
                  className="w-full border-b py-[10px]"
                  name="phone"
                  type="text"
                  placeholder="Phone No"
                />
              
              </div>
            </form>
            
            <h4 className="text-[20px] text-[#222831]">Payment Method</h4>

            <div className="w-full flex flex-wrap items-center gap-[20px] mb-[20px]">
              <label
                className="flex items-center gap-[10px]"
                htmlFor="payments"
              >
                <input
                  onChange={() => dispatch(setPaymentMethod("creditCard"))}
                  id="payments"
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "creditCard"}
                />
                <img src="../../assets/img/news/payment-cards.png" alt="" />
              </label>
              <label
                className="flex items-center gap-[10px]"
                htmlFor="payments2"
              >
                <input
                  onChange={() => dispatch(setPaymentMethod("googlePay"))}
                  id="payments2"
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "googlePay"}
                />
                <img src="../../assets/img/news/payment-cards2.png" alt="" />
              </label>
              <label
                className="flex items-center gap-[10px]"
                htmlFor="payments3"
              >
                <input
                  onChange={() => dispatch(setPaymentMethod("applePay"))}
                  id="payments3"
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "applePay"}
                />
                <img src="../../assets/img/news/payment-cards3.png" alt="" />
              </label>
            </div>

            <h4 className="text-[20px] text-[#222831]">Payment Details</h4>
            <PaymentForm />

            

            <div className="w-full flex flex-col">
              <h4 className="text-[20px] text-[#222831]">Billing Address</h4>
              <span className="text-[13px] text-[#222831]">
              Select the address that matches your card or payment method.
              </span>
            </div>
            <form className="w-full flex flex-col" action="">
              <input
                onChange={handleuserDetails}
                value={userDetails.address}
                className="w-full border-b py-[10px]"
                name="address"
                type="text"
                placeholder="billing address"
              />
            </form>

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[15px] mt-[10px]">
                <span className="text-[11px] text-[#AAA9A9] leading-normal">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </span>
                <span className="text-[11px] text-[#AAA9A9] leading-normal">
                  By clicking “Next step” I agree to company’s terms of service
                </span>
              </div>
            </div>
            <button
              onClick={() => setStep(2)}
              className="tp-btn my-[40px] px-[60px] ml-auto next-btn"
            >
              Next
            </button>
          </div>
          <div
            className={`${
              step !== 2 && `hidden`
            } w-[50%] pt-[160px] px-[100px] flex flex-col items-start gap-[10px]`}
          >


<div className="w-full bg-[#F7F7F7] rounded-[30px] p-[24px]">
              <div className="w-full flex justify-between items-center">
                <p className="text-[#222831] text-[20px] m-0">Card Details</p>
                <span> <img src="../../assets/img/case/payment-card.png" alt="" /> </span>
              </div>
              <div className="w-full mt-[30px]">
                <span className="text-[#AAA9A9] text-[13px] mb-[5px] flex">Card Number</span>
                <p className="text-[#222831] text-[24px] flex gap-[30px]"> <span>4659</span>  <span>2094</span>   <span>3239</span>   <span>2922</span> </p>
              </div>


              <div className="w-full mt-[20px] flex justify-between items-center">
                <div>
                <span className="text-[#AAA9A9] text-[13px] mb-[0] flex">Name</span>
                <p className="text-[#222831] text-[20px] m-0">John Doe</p>
                </div>
                <div>
                <span className="text-[#AAA9A9] text-[13px] mb-[0] flex">Expiration</span>
                <p className="text-[#222831] text-[20px] m-0">22/06</p>
                </div>
              </div>
            </div>

            <h4 className="text-[20px] text-[#222831] mt-[30px]">Billing Address</h4>

            <form className="w-full flex flex-col mb-[10px]" action="">
              <input
                className="w-full border-b py-[10px] text-[#000]"
                type="text"
                value={userDetails.address}
                placeholder="Address"
              />
            </form>

            

            <span className="text-[11px] text-[#AAA9A9] leading-normal">
              {userDetails.address}
            </span>
            <div className="flex gap-[20px]">
              <button
                onClick={() => setStep(1)}
                className="bg-[#fff] border text-[#000] hover:bg-[#353433] hover:text-[#fff] my-[40px] px-[60px] ml-auto next-btn"
              >
                Back
              </button>
              <button
                onClick={confirmPayment}
                className="tp-btn my-[40px] px-[60px] ml-auto next-btn"
              >
                Confirm payment
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
