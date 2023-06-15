import { combineReducers } from '@reduxjs/toolkit';
import currentUserSlice from './currentUser/currentUserReducer';
import testSlice from './test/testReducer';

export default combineReducers({
  currentUserSlice,
  testSlice
});
