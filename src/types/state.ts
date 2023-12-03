import { AuthorizationStatusValues } from '../const';
import { store } from '../store';
import { Children } from './children';
import { Parents } from './parents';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  authorizationStatus: AuthorizationStatusValues;
};

export type ChildrenData = {
  children: Children;
  childrenWithoutParent: Children;
};

export type ParentsData = {
  parents: Parents;
};
