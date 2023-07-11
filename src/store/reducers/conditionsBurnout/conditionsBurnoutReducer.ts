import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../store";
import {UserConditionRecieved, UserConditionButtonSent, UserBurnoutLevel} from "@/types";

export interface conditionsBurnoutStateInterface {
  condition: UserConditionRecieved[] | null,
  buttonCondition: UserConditionButtonSent | null
  burnout: UserBurnoutLevel[] | null
}

const initialState: conditionsBurnoutStateInterface | null= {
  condition: null,
  buttonCondition: null,
  burnout: null
};

export const conditionsBurnoutSlice = createSlice({
  name: "conditionsBurnoutSlice",
  initialState,
  reducers: {
    addConditions: (state, action) => {
      state.condition = action.payload;
    },
    sendButtonCondition: (state, action) => {
      state.buttonCondition = action.payload;
    },
    addButtonCondition: (state, action) => {
      if (state.condition) state.condition.push(action.payload);
    },
    resetConditions: (state) => {
      state.condition = null;
    },
    addBurnoutLevet: (state, action) => {
      state.burnout = action.payload;
    },
  },
});

export const selectConditions = (state: RootState) => state.conditionsBurnoutSlice.condition;
export const selectBurnoutLevel = (state: RootState) => state.conditionsBurnoutSlice.burnout;
export const selectButtonConditions = (state: RootState) => state.conditionsBurnoutSlice.buttonCondition;

export const {
  addConditions,
  resetConditions,
  sendButtonCondition,
  addButtonCondition,
  addBurnoutLevet
} = conditionsBurnoutSlice.actions;

export default conditionsBurnoutSlice.reducer;
