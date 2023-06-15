import { createSlice } from '@reduxjs/toolkit';

const plansSlice = createSlice({
    name: 'plans',
    initialState: [],
    reducers: {
        setPlans: (state, action) => {
            return action.payload;
        }
    }
});

export const { setPlans } = plansSlice.actions;
export default plansSlice.reducer;

