import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../const';
import { userData } from './user-data/user-data';
import { childrenData } from './children-data/children-data';

export const rootReducer = combineReducers({
  [Namespace.User]: userData.reducer,
  [Namespace.Children]: childrenData.reducer,
});
