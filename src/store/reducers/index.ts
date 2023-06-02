import { combineReducers } from '@reduxjs/toolkit';
import constructorSlice from './constructor/constructorReducer';
import testCounterSlice from './testCounter/testCounterReducer';

export default combineReducers({
  constructorSlice,
  testCounterSlice
});
