import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface ConstructorState {
  value: boolean;
}

const initialState: ConstructorState = {
  value: true,
};

export const constructorSlice = createSlice({
  name: 'constructorSlice',
  initialState,
  reducers:
  {
    toggleConstructorIsActive: (state) => {
      state.value = !state.value;
    },
  },
});

export const selectConstructor = (state: RootState) => state.constructorSlice.value;
export const { toggleConstructorIsActive } = constructorSlice.actions;

export default constructorSlice.reducer;
