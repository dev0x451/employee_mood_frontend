import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { User } from "@/types";

const initialState = {
  currentUser: <User>{
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
    mental_state: null,
    patronymic: "",
    phone: 0,
    position: null,
    role: "",
  },
};

export const currentUserSlice = createSlice({
  name: "constructorSlice",
  initialState,
  reducers: {
    setAllCurrentUserData: (state, action) => {
      state.currentUser = action.payload;
    },
    resetAllCurrentUserData: (state) => {
      state.currentUser = {
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
        mental_state: null,
        patronymic: "",
        phone: 0,
        position: null,
        role: "",
      };
    },
  },
});

export const selectRole = (state: RootState) =>
  state.currentUserSlice.currentUser.role;
export const selectFirstName = (state: RootState) =>
  state.currentUserSlice.currentUser.first_name;
export const selectLastName = (state: RootState) =>
  state.currentUserSlice.currentUser.last_name;
export const selectAvatar = (state: RootState) =>
  state.currentUserSlice.currentUser.avatar;
export const selectUserInfo = (state: RootState) =>
  state.currentUserSlice.currentUser;

export const { resetAllCurrentUserData, setAllCurrentUserData } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
