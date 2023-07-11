import { combineReducers } from "@reduxjs/toolkit";
import currentUserSlice from "./currentUser/currentUserReducer";
import testSlice from "./test/testReducer";
import alertErrorSlice from "./alertError/alertErrorReducer";
import alertSuccessSlice from "./alertSuccess/alertSuccessReducer";
import notificationsSlice from "./notifications/notificationsReducer"
import conditionsBurnoutSlice from "./conditionsBurnout/conditionsBurnoutReducer";

export default combineReducers({
  currentUserSlice,
  testSlice,
  alertErrorSlice,
  alertSuccessSlice,
  notificationsSlice,
  conditionsBurnoutSlice
});
