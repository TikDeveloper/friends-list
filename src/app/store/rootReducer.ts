import { friendSlice } from '@entities/friend';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [friendSlice.name]: friendSlice.reducer,
});
