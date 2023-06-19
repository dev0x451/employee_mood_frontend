import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface ErrorMessage {
  error: string;
}

const initialState: ErrorMessage = {
  error: "",
};

export const alertErrorSlice = createSlice({
  name: "alertError",
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    deleteErrorMessage: (state) => {
      state.error = "";
    },
  },
});

export const { setErrorMessage, deleteErrorMessage } = alertErrorSlice.actions;
export const selectErrorMessage = (state: RootState) =>
  state.alertErrorSlice.error;

export default alertErrorSlice.reducer;
