import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../store";
import {WebSocketMessage} from "@/types";

export interface NotificationsStateInterface {
  websocket: WebSocketMessage | null
}

const initialState: NotificationsStateInterface | null= {
  websocket: null
};

export const notificationsSlice = createSlice({
  name: "notificationsSlice",
  initialState,
  reducers: {
    addNotifications: (state, action) => {
      state.websocket = action.payload;
    },
    resetNotifications: (state) => {
      state.websocket = null;
    },
  },
});

export const selectNotifications = (state: RootState) => state.notificationsSlice.websocket?.message?.notifications;

export const {addNotifications, resetNotifications} = notificationsSlice.actions;

export default notificationsSlice.reducer;
