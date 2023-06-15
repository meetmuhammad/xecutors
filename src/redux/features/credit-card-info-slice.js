import { createSlice } from '@reduxjs/toolkit';

const creditCardInitialState = {
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  }

const creditCardInfoSlice = createSlice({
    name: 'creditCardInfo',
    initialState: creditCardInitialState,
    reducers: {
        setCreditCardInfo: (state, action) => {
            return action.payload;
        }
    }
});

export const { setCreditCardInfo } = creditCardInfoSlice.actions;
export default creditCardInfoSlice.reducer;

