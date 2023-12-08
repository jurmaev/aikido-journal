import { AuthorizationStatusValues } from '../const';
import { store } from '../store';
import { Children } from './children';
import { Group, Groups } from './group';
import { Parents } from './parents';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserRole = 'coach' | 'parent';

export type UserData = {
  authorizationStatus: AuthorizationStatusValues;
  role: UserRole | null;
};

export type LoginData = {
  token: string;
  role: UserRole;
};

export type ChildrenData = {
  children: Children;
  childrenWithoutParent: Children;
};

export type ParentsData = {
  parents: Parents;
};

export type GroupData = {
  groups: Groups;
  newGroup: Group | null;
};
