import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface testCounterState {
  positivValue: number,
  negativValue: number
}

const initialState: testCounterState = {
  positivValue: 0,
  negativValue: 10
};

export const testCounterSlice = createSlice({
  name: 'testCounterSlice',
  initialState,
  reducers:
  {
    addPositivValue: (state: testCounterState, action: PayloadAction<number>) => {
      state.positivValue += action.payload;
    },
    addNegativValue: (state: testCounterState, action: PayloadAction<number>) => {
      state.negativValue += action.payload;
    },
    resetValues: (state: testCounterState) => {
      state.positivValue = 0;
      state.negativValue = 10;
    }
  },
});

export const selectPositivValue = (state: RootState) => state.testCounterSlice.positivValue;
export const selectNegativValue = (state: RootState) => state.testCounterSlice.negativValue;
export const { addPositivValue, addNegativValue, resetValues } = testCounterSlice.actions;

export default testCounterSlice.reducer;
