import { createSlice } from "@reduxjs/toolkit";

const checkoutActiveSlice = createSlice({
  name: "CheckoutActive",
  initialState: false,
  reducers: {
    setCheckoutActive: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCheckoutActive } = checkoutActiveSlice.actions;
export default checkoutActiveSlice.reducer;
