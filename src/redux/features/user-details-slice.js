import { createSlice } from '@reduxjs/toolkit';

const userDetailsInitialState = {
    email: '',
    phone: '',
    address: '',
  }

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: userDetailsInitialState,
    reducers: {
        setUserDetails: (state, action) => {
            return action.payload;
        }
    }
});

export const { setUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;

