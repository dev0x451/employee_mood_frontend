import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { User } from '@/types';

const initialState: User = {
  about: '',
  avatar: '',
  date_joined: '',
  department: null,
  email: '',
  first_name: '',
  hobbies: null,
  id: 0,
  last_name: '',
  latest_condition: null,
  mental_state: '',
  patronymic: '',
  phone: 0,
  position: null,
  role: '',
};

export const currentUserSlice = createSlice({
  name: 'constructorSlice',
  initialState,
  reducers:
  {
    setCurrentUser: (state, action) => {
      state.role = action.payload;
    },
    resetCurrentUser: (state) => {
      state.role = '';
    }
  },
});

export const selectRole = (state: RootState) => state.currentUserSlice.role;
export const { setCurrentUser, resetCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
