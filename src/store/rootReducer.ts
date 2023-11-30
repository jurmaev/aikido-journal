import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../const';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
  [Namespace.User]: userData.reducer,
});
