import { createSlice } from '@reduxjs/toolkit';

const selectedPlansSlice = createSlice({
    name: 'selectedPlan',
    initialState: {},
    reducers: {
        setSelectedPlan: (state, action) => {
            return action.payload;
        }
    }
});

export const { setSelectedPlan } = selectedPlansSlice.actions;
export default selectedPlansSlice.reducer;
