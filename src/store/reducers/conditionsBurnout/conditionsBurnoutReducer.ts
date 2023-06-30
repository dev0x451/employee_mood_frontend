import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../store";
import {UserConditionRecieved} from "@/types";

export interface conditionsBurnoutStateInterface {
  condition: UserConditionRecieved[] | null,
  burnout: null
}

const initialState: conditionsBurnoutStateInterface | null= {
  condition: null,
  burnout: null
};

export const conditionsBurnoutSlice = createSlice({
  name: "conditionsBurnoutSlice",
  initialState,
  reducers: {
    addConditions: (state, action) => {
      state.condition = action.payload;
    },
    resetConditions: (state) => {
      state.condition = null;
    },
  },
});

export const selectConditions = (state: RootState) => state.conditionsBurnoutSlice.condition;

export const {addConditions, resetConditions} = conditionsBurnoutSlice.actions;

export default conditionsBurnoutSlice.reducer;
