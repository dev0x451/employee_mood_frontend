import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store";
import {AnswerResult, TestResults} from "@/types";

const initialState: TestResults = {
  survey: 0,
  results: [],
};

export const testSlice = createSlice({
  name: "testCounterSlice",
  initialState,
  reducers: {
    addTestResults: (
      state: TestResults,
      action: PayloadAction<AnswerResult>
    ) => {
      const res = state.results;
      const question = action.payload.question_id;
      const answer = action.payload.variant_value;

      if (res.length > 0) {
        if (res.some((elem) => elem.question_id == question)) {
          res.map((item) => {
            if (item.question_id == question) {
              item.variant_value = answer;
            }
          });
        } else {
          console.log("Закинул новое значени екакоо-то хуя");
          res.push(action.payload);
        }
      } else {
        console.log("Отработало при нуле");
        res.push(action.payload);
      }

      state.results = res;
    },
    resetTestResults: (state: TestResults) => {
      state.results = [];
    },
  },
});

export const selectTestResults = (state: RootState) => state.testSlice.results;
export const {addTestResults, resetTestResults} = testSlice.actions;

export default testSlice.reducer;
