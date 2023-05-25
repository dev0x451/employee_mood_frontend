import { combineReducers } from '@reduxjs/toolkit';
import constructorSlice from './constructor/constructorReducer';

export default combineReducers({
  constructorSlice,
});
