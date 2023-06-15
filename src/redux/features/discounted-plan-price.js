import { createSlice } from '@reduxjs/toolkit';

const discountedPriceSlice = createSlice({
    name: 'discountedPrice',
    initialState: 0,
    reducers: {
        setDiscountedPrice: (state, action) => {
            return action.payload;
        }
    }
});

export const { setDiscountedPrice } = discountedPriceSlice.actions;
export default discountedPriceSlice.reducer;
