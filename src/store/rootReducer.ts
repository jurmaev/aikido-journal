import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../const';
import { userData } from './user-data/user-data';
import { childrenData } from './children-data/children-data';
import { parentsData } from './parents-data/parents-data';
import { groupData } from './group-data/group-data';

export const rootReducer = combineReducers({
  [Namespace.User]: userData.reducer,
  [Namespace.Children]: childrenData.reducer,
  [Namespace.Parents]: parentsData.reducer,
  [Namespace.Groups]: groupData.reducer,
});
