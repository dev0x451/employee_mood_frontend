import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { User } from "@/types";

const initialState: User = {
  about: "",
  avatar: "",
  date_joined: "",
  department: null,
  email: "",
  first_name: "",
  hobbies: null,
  id: 0,
  last_name: "",
  latest_condition: null,
  mental_state: "",
  patronymic: "",
  phone: 0,
  position: null,
  role: "",
};

export const currentUserSlice = createSlice({
  name: "constructorSlice",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.role = action.payload;
    },
    resetCurrentUser: (state) => {
      state.role = "";
    },
    setCurrentUserFirstName: (state, action) => {
      state.first_name = action.payload;
    },
    resetCurrentUserFirstName: (state) => {
      state.first_name = "";
    },
    setCurrentUserLastName: (state, action) => {
      state.last_name = action.payload;
    },
    resetCurrentUserLastName: (state) => {
      state.last_name = "";
    },
    setCurrentUserPosition: (state, action) => {
      state.position = action.payload;
    },
    resetCurrentUserPosition: (state) => {
      state.position = null;
    },
    setCurrentUserAbout: (state, action) => {
      state.about = action.payload;
    },
    resetCurrentUserAbout: (state) => {
      state.about = "";
    },
    setCurrentUserAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    resetCurrentUserAvatar: (state) => {
      state.avatar = "";
    },
  },
});

export const selectRole = (state: RootState) => state.currentUserSlice.role;
export const selectFirstName = (state: RootState) =>
  state.currentUserSlice.first_name;
export const selectLastName = (state: RootState) =>
  state.currentUserSlice.last_name;
export const selectPosition = (state: RootState) =>
  state.currentUserSlice.position;
export const selectAbout = (state: RootState) => state.currentUserSlice.about;
export const selectAvatar = (state: RootState) => state.currentUserSlice.avatar;
export const {
  setCurrentUser,
  resetCurrentUser,
  setCurrentUserFirstName,
  setCurrentUserLastName,
  setCurrentUserPosition,
  setCurrentUserAbout,
  setCurrentUserAvatar,
  resetCurrentUserFirstName,
  resetCurrentUserLastName,
  resetCurrentUserPosition,
  resetCurrentUserAbout,
  resetCurrentUserAvatar,
} = currentUserSlice.actions;

export default currentUserSlice.reducer;
