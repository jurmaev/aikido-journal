import { AuthorizationStatusValues } from '../const';
import { store } from '../store';
import { Children } from './children';
import { Debt } from './debt';
import { Group, GroupAttendance, Groups } from './group';
import { Attendance, ScheduleInfo } from './parent';
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
  isFetchingChildrenData: boolean;
};

export type ParentsData = {
  parents: Parents;
  isFetchingParentsData: boolean;
};

export type ParentData = {
  schedule: ScheduleInfo[];
  attendance: Attendance[];
};

export type GroupData = {
  groups: Groups;
  newGroup: Group | null;
  childrenWithoutGroup: Children;
  isFetchingGroupData: boolean;
  attendance: GroupAttendance | null;
};

export type DebtData = {
  debt: Debt[];
};
