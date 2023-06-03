import { combineReducers } from '@reduxjs/toolkit';
import currentUserSlice from './currentUser/currentUserReducer';
import testCounterSlice from './testCounter/testCounterReducer';

export default combineReducers({
  currentUserSlice,
  testCounterSlice
});
