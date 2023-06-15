import { createSlice } from '@reduxjs/toolkit';

const paymentMethodSlice = createSlice({
    name: 'paymentMethod',
    initialState: "creditCard",
    reducers: {
        setPaymentMethod: (state, action) => {
            return action.payload;
        }
    }
});

export const { setPaymentMethod } = paymentMethodSlice.actions;
export default paymentMethodSlice.reducer;

