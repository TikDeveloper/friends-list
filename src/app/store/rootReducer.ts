import { combineReducers } from '@reduxjs/toolkit';
import { testSlice } from '@shared/model';

export const rootReducer = combineReducers({
  [testSlice.name]: testSlice.reducer,
});
