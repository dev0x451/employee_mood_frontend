import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface SuccessMessage {
  success: string;
}

const initialState: SuccessMessage = {
  success: "",
};

export const alertSuccessSlice = createSlice({
  name: "alertError",
  initialState,
  reducers: {
    setSuccessMessage: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
    },
    deleteSuccessMessage: (state) => {
      state.success = "";
    },
  },
});

export const { setSuccessMessage, deleteSuccessMessage } =
  alertSuccessSlice.actions;
export const selectSuccessMessage = (state: RootState) =>
  state.alertSuccessSlice.success;

export default alertSuccessSlice.reducer;
