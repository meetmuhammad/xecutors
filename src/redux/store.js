import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth-slice";
import cartSlice from "./features/cart-slice";
import blogsSlice from "./features/blogs-slice";
import productSlice from "./features/product-slice";
import wishlistSlice from "./features/wishlist-slice";
import pricingSlice from "./features/pricing-slice";
import checkoutActiveSlice from "./features/checkout-active-slice";
import plansSlice from "./features/plans-slice";
import selectedPlanSlice from "./features/selected-plan-slice";
import discountedPlanPrice from "./features/discounted-plan-price";
import paymentMethodSlice from "./features/payment-method-slice";
import creditCardInfoSlice from "./features/credit-card-info-slice";
import userDetailsSlice from "./features/user-details-slice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    products: productSlice,
    auth: authSlice,
    blogs: blogsSlice,
    pricing: pricingSlice,
    checkoutActive: checkoutActiveSlice,
    plans: plansSlice,
    selectedPlan: selectedPlanSlice,
    discountedPrice: discountedPlanPrice,
    paymentMethod: paymentMethodSlice,
    creditCardInfo: creditCardInfoSlice,
    userDetails: userDetailsSlice
  },
});
